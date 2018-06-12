import { Platform } from "react-native";
import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'
import { getLastVisitedDate } from './api'; 

const NOTIFICATION_KEY = 'UdaciCards:notifications'
export const isAndroid = () => {
    return Platform.OS !== 'ios'; 
}

export async function setLocalNotification(){
    Permissions.askAsync(Permissions.NOTIFICATIONS)
    .then(({ status }) => {
      if (status === 'granted') {
        Notifications.cancelAllScheduledNotificationsAsync();

        getLastVisitedDate().then(lastVisitedDate => {
          let tomorrow = new Date(); 
          let visitedDate = JSON.parse(lastVisitedDate); 
          if (visitedDate) {
            let tomorrow = new Date(visitedDate); 
          }
          tomorrow.setHours(24);
          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
              time: tomorrow,
              repeat: 'day',
            }
          );
        })
      }
    })
    
  }

const createNotification = () => {
return {
    title: 'UdaciCards - Reminder to study!',
    body: "👋 don't forget to study your flash cards today!",
    ios: {
    sound: true,
    },
    android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
    }
}
}