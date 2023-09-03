import analytics from '@react-native-firebase/analytics';

export const logEvent = async (name, data = {}) => {
  try {
    await analytics().logEvent(name, data);
  } catch (error) {
    console.error('Error logging event:', error);
  }
};
