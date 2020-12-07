//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using Aircraft.Models.Models;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.Extensions.Configuration;
//using Aircraft.API.Models;
//using System.Net;
//using Serilog;

//namespace Aircraft.API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class IdentityController : ControllerBase
//    {
//        private readonly AircraftDbContext _context;
//        private readonly SignInManager<Companion> signInManager;
//        private readonly IPasswordHasher<Companion> hasher;
//        private readonly UserManager<Companion> personManager;

//        public IdentityController(AircraftDbContext context, SignInManager<Companion> signInManager, IConfiguration configuration, IPasswordHasher<Companion> hasher, UserManager<Companion> PersonManager, GenericRepo<Companion> repo, ILogger _logger)
//        {
//            _context = context;
//            this.signInManager = signInManager;
//            this.hasher = hasher;
//            personManager = PersonManager;
//        }
//        /// <summary>
//        /// Register a new administrator
//        /// </summary>
//        /// <remarks>
//        /// Sample Request:
//        /// 
//        ///     Post /register
//        ///     {
//        ///         "email": "John.Doe@hotmail.com",
//        ///         "password": "password",
//        ///         "ConfirmPassword": "password"
//        ///     }
//        /// </remarks>
//        [HttpPost("register")]
//        [ProducesResponseType(StatusCodes.Status201Created)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status500InternalServerError)]
//        public async Task<ActionResult> Registeradministrator([FromBody] RegisterDTO registerDTO)
//        {
//            try
//            {
//                if (ModelState.IsValid)
//                {
//                    var administrator = new Administrator { Email = registerDTO.Email, UserName = registerDTO.Email };
//                    var result = await _administratorManager.CreateAsync(administrator, registerDTO.Password);
//                    List<IdentityError> resultList = new List<IdentityError>();


//                    if (result.Succeeded)
//                    {
//                        var role = await _administratorManager.AddToRoleAsync(administrator, "Administrator");
//                        string administratorId = _administratorManager.FindByEmailAsync(administrator.Email).Result.Id.ToString();

//                        AdministratorDTO administratorDTO = _mapper.Map<AdministratorDTO>(administrator);

//                        return Created("api/v1/auth/register", administratorDTO);
//                    }
//                    else
//                    {
//                        resultList = result.Errors.ToList();
//                        for (int i = 0; i < resultList.Count(); i++)
//                        {
//                            if (resultList[i].Code == "DuplicateUserName")
//                            {
//                                resultList[i].Description = "Dit e-mailadres '" + administrator.Email + "' is al in gebruik.";
//                            }
//                        }
//                    }
//                    return BadRequest(string.Join(",", resultList?.Select(error => error.Description)));
//                }

//                string errorMessage = string.Join(", ", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage));
//                return BadRequest(errorMessage ?? "Bad Request");
//            }
//            catch (Exception ex)
//            {
//                _logger.LogError(ex.Message);
//                return new StatusCodeResult(500);
//            }

//        }

//        /// <summary>
//        /// Login with credentials
//        /// </summary>
//        /// <remarks>
//        /// Sample Request:
//        /// 
//        ///     Post /login
//        ///     {
//        ///         "email": "John.Doe@hotmail.com",
//        ///         "password": "password"
//        ///     }
//        /// </remarks>
//        [HttpPost("login")]
//        [ProducesResponseType(StatusCodes.Status200OK)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status500InternalServerError)]
//        public async Task<ActionResult> Login([FromBody] LoginDTO loginDTO)
//        {
//            try
//            {
//                if (ModelState.IsValid)
//                {
//                    var appadministrator = await _administratorManager.FindByEmailAsync(loginDTO.Email);
//                    if (appadministrator != null)
//                    {
//                        bool result = await _administratorManager.CheckPasswordAsync(appadministrator, loginDTO.Password);

//                        Administrator administrator = await _administratorRepo.GetByIdAsync(appadministrator.Id);
//                        if (result)
//                        {
//                            var token = AuthenticationHelper.GenerateJwtToken(administrator, loginDTO.Email, _configuration);

//                            var refreshToken = await _administratorManager.GenerateUserTokenAsync(administrator, "Project3_Backend", "RefreshToken");
//                            var res = await _administratorManager.SetAuthenticationTokenAsync(administrator, "Project3_Backend", "RefreshToken", refreshToken);

//                            var rootData = new LoginResponseDTO(token, refreshToken, appadministrator.UserName, appadministrator.Email);
//                            return Ok(rootData);
//                        }
//                    }

//                    return StatusCode((int)HttpStatusCode.Unauthorized, "De combinatie van e-mailadres en wachtwoord klopt niet. Probeer het opnieuw.");
//                }
//                string errorMessage = string.Join(", ", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage));
//                return BadRequest(errorMessage ?? "Bad Request");
//            }
//            catch (Exception ex)
//            {
//                _logger.LogError(ex.Message);
//                return new StatusCodeResult(500);
//            }
//        }

//        /// <summary>
//        /// Forgot password
//        /// </summary>
//        /// <param name="administratorEmail"></param>
//        /// <returns></returns>
//        [HttpGet("forgotpassword/{administratorEmail}")]
//        [ProducesResponseType(StatusCodes.Status204NoContent)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status500InternalServerError)]
//        public async Task<ActionResult<AdministratorDTO>> NotifyForgotPassword(string administratorEmail)
//        {
//            try
//            {
//                // get person base on email
//                Administrator administrator = await _administratorManager.FindByEmailAsync(administratorEmail);

//                // check if person exist
//                if (administrator == null)
//                    return NotFound("Gebruiker niet gevonden!");

//                var code = await _administratorManager.GeneratePasswordResetTokenAsync(administrator);
//                code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));

//                // send email
//                Email email = new Email()
//                {
//                    From = new MailName() { FullName = "HandhygieneCompliance", MailAddress = "noreply@handhygienecompliance.be" },
//                    To = new MailName() { /*FullName = $"{administrator.FirstName} {administrator.LastName}",*/ MailAddress = administrator.Email },
//                    Subject = "Wachtwoord vergeten",
//                    Message = $"Je wachtwoord vergeten? <br/> Maak je geen zorgen! Klik op onderstaande link om je wachtwoord opnieuw in te stellen. <br/> <br/> <a href='http://localhost:1234/resetPassword.html?id={administrator.Id}&code={code}'> Klik hier </a> "

//                };

//                await EmailService.SendEmailAsync(email);

//                // save
//                await _dbRepo.SaveAsync();
//                _logger.LogInformation($"Administrator with email {administrator.Email} has sent a email to reset password");

//                // return
//                return NoContent();
//            }
//            catch (Exception ex)
//            {
//                _logger.LogError(ex.Message);
//                return BadRequest(500);
//            }
//        }

//        /// <summary>
//        /// Forgot password
//        /// </summary>
//        /// <param name="forgotPasswordDTO"></param>
//        /// <returns></returns>
//        [HttpPost("forgotpassword")]
//        [ProducesResponseType(StatusCodes.Status204NoContent)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status500InternalServerError)]
//        public async Task<ActionResult<Administrator>> ForgotPassword([FromBody] ForgotPasswordDTO forgotPasswordDTO)
//        {
//            try
//            {
//                if (ModelState.IsValid)
//                {
//                    // check if password is correct
//                    if (forgotPasswordDTO.Password != forgotPasswordDTO.PasswordComfirmation)
//                        return BadRequest("Paswoorden komen niet overeen");

//                    // get person base on email
//                    Administrator administrator = await _administratorManager.FindByIdAsync(forgotPasswordDTO.AdministratorId);

//                    // check if person exist
//                    if (administrator == null)
//                        return NotFound("Gebruiker niet gevonden");

//                    // reset password
//                    var code = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(forgotPasswordDTO.ResetCode));
//                    var result = await _administratorManager.ResetPasswordAsync(administrator, code, forgotPasswordDTO.Password);

//                    if (result.Succeeded)
//                    {
//                        // save
//                        await _dbRepo.SaveAsync();
//                        _logger.LogInformation($"Administrator with email {administrator.Email} reset his password");

//                        // return
//                        return NoContent();
//                    }
//                    return BadRequest(string.Join(",", result.Errors?.Select(error => error.Description)));
//                }

//                string errorMessage = string.Join(", ", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage));
//                return BadRequest(errorMessage ?? "Bad Request");
//            }
//            catch (Exception ex)
//            {
//                _logger.LogError(ex.Message);
//                return BadRequest(500);
//            }
//        }

//        /// <summary>
//        /// Reset password
//        /// </summary>
//        /// <param name="resetPasswordDTO"></param>
//        /// <returns></returns>
//        [HttpPost("resetpassword")]
//        [ProducesResponseType(StatusCodes.Status204NoContent)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
//        [ProducesResponseType(typeof(string), StatusCodes.Status500InternalServerError)]
//        public async Task<ActionResult<RegisteredUser>> ResetPassword([FromBody] ResetPasswordDTO resetPasswordDTO)
//        {
//            try
//            {
//                // check if password is correct
//                if (resetPasswordDTO.Password != resetPasswordDTO.PasswordComfirmation)
//                    return BadRequest("Paswoorden komen niet overeen");

//                // map resource --> domain class
//                LoginDTO loginDTO = _mapper.Map<ResetPasswordDTO, LoginDTO>(resetPasswordDTO);

//                var administrator = await _administratorManager.FindByEmailAsync(loginDTO.Email);
//                // check if person exist
//                if (administrator == null)
//                    return NotFound("Dit e-mailadres bestaat nog niet");

//                bool result = await _administratorManager.CheckPasswordAsync(administrator, loginDTO.Password);


//                if (result)
//                {
//                    var code = await _administratorManager.GeneratePasswordResetTokenAsync(administrator);
//                    var resultReset = await _administratorManager.ResetPasswordAsync(administrator, code, resetPasswordDTO.Password);

//                    if (resultReset.Succeeded)
//                    {
//                        _logger.LogInformation($"Administrator with email {administrator.Email} reset his password");
//                        // return
//                        return NoContent();
//                    }
//                    return BadRequest(string.Join(",", resultReset.Errors?.Select(error => error.Description)));
//                }
//                return StatusCode((int)HttpStatusCode.Unauthorized, "De combinatie van e-mailadres en wachtwoord klopt niet.");
//            }
//            catch (Exception ex)
//            {
//                _logger.LogError(ex.Message);
//                return BadRequest(500);
//            }
//        }

//    }
//}
