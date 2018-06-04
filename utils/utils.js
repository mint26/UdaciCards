import { Platform } from "react-native";
import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'UdaciCards:notifications'
const LAST_VISIT = 'UdaciCards:last_visit_datetime';
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
 
                let tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate());
                tomorrow.setHours(24);
  
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

export const updateLastVisit = () => {
    let currentDate = new Date(); 
    AsyncStorage.setItem(LAST_VISIT, JSON.stringify(currentDate)); 
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