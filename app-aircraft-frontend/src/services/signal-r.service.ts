import { Injectable } from '@angular/core';

import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root',
})
export class signalRService {
  private hubConnection: signalR.HubConnection;
  public message: string;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:58269/chathub') //poort van de realtimeservice
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  };
  //send message to realtime

  public sendBroadcast = () => {
    console.log('send broadcast');
    console.log(this.message);
    this.message = 'flight status of flight to Brussels changed to delayed';
    this.hubConnection
      .invoke('ClientMessage', { message: this.message })
      .catch((err) => console.error(err));
  };

  //listen to message from realtimeservice
  public showBroadcast = () => {
    this.hubConnection.on('ServerMessage', (data) => {
      // this.data = data;
      console.log({ broadcastmessage: data.message });
    });
  };
}