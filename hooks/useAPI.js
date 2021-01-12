import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API = "https://ongaikngee.pythonanywhere.com";
const API_WHOAMI = "/whoami";

export function useUsername() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      if (token == null) {
        setError(true);
        setUsername(null);
      } else {
        try {
          const response = await axios.get(API + API_WHOAMI, {
            headers: { Authorization: `JWT ${token}` },
          });
          setUsername(response.data.username);
        } catch (e) {
          setError(true);
          setUsername(null);
        } finally {
          setLoading(false);
        }
      }
    })(); // this yellow bracket will invoke immediately IIFE
    setRefresh(false);
  }, [refresh]);

  return [username, loading, error, setRefresh];
}