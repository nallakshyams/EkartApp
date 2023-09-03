import analytics from '@react-native-firebase/analytics';
import {Alert, PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

export const logEvent = async (name, data = {}) => {
  try {
    await analytics().logEvent(name, data);
  } catch (error) {
    console.error('Error logging event:', error);
  }
};

const requestPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      getFcmToken();
      console.log('notifications permission granted.');
    } else {
      console.log('notifications permission denied.');
    }
  } catch (err) {
    console.warn(err);
  }
};
const getFcmToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log('fcmToken', fcmToken);
  } else {
    this.showAlert('Error', 'FCM token not received');
  }
};
const checkPermission = async () => {
  const hasPermission = await messaging().hasPermission();
  if (hasPermission) {
    getFcmToken();
  } else {
    requestPermission();
  }
};

const NotificationListener = () => {
  messaging().onMessage(async remoteMessage => {
    const {notification} = remoteMessage;
    Alert.alert(notification.title, notification.body);
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
export {checkPermission, NotificationListener};
