# Udacity CRM React Native App

This is my project for the Udacity CRM React Native App! The app is
is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

# Features

- **Welcome page**: Basic welcome page that allows you to clear storage.
- **Regions List**: This screen allows you to select a region to view customers from that region. It also allows you to create a new customer.
- **Region View**: This screen shows you the list of customers for that region. Selecting a customer in this list takes you to the customer details screen. This screen also allows you to create customers, but defaults the region to the current region.
- **Customer Details**: This screen allows you to view all of the customer information. It also allows you to set a reminder to call the customer. NOTE: for development purposes this only has a fixed reminder of 10 seconds.
- **Create Customer**: This screen allows you to create a new customer.
