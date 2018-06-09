import { Platform } from "react-native";
import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'
import { getLastVisitedDate } from './api'; 

const NOTIFICATION_KEY = 'UdaciCards:notifications'
export const isAndroid = () => {
    return Platform.OS !== 'ios'; 
}

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync();
 
                let lastVisitedDate = getLastVisitedDate(); 
                let tomorrow = new Date(); 
                if (lastVisitedDate) {
                  tomorrow.setDate(lastVisitedDate.getDate());
                }
                tomorrow.setHours(1);

                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )
  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
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