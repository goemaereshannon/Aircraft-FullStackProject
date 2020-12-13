import { Injectable } from '@angular/core';

import * as signalR from '@aspnet/signalr';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'presentations/shared/dialog/dialog.component';
@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  constructor(
    private dialog: MatDialog,
    private dialogComponent: DialogComponent
  ) {}
  private hubConnection: signalR.HubConnection;
  public message: string;

  ngOnInit() {}
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:32820/chathub') //poort van de realtimeservice
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

  public readAdminMessage = () => {
    return this.hubConnection.on('admin', (data): string => {
      console.log('message recieved');

      //this.dialogComponent.DialogMessage = data.message;
      // console.log(this.dialogComponent.DialogMessage);
      this.dialog.open(DialogComponent, { data: data.message });
      return data;
    });
  };
  //listen to message from realtimeservice
  public showBroadcast = () => {
    this.hubConnection.on('ServerMessage', (data) => {
      // this.data = data;
      console.log({ broadcastmessage: data.message });
    });
  };
}
