import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/Screens/Welcome";
import Login from "./src/Screens/Login";
import SignUp from "./src/Screens/SignUp";
import Settings from "./src/Screens/Settings";
import Forgot from "./src/Screens/Forgot";
import Product from "./src/Screens/Product";
import Explore from "./src/Screens/Explore";
import Browse from "./src/Screens/Browse";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Browse" component={Browse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
