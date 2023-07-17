import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// https://geo.ipify.org/api/v2/country?apiKey=at_WyovYnh17ihNyl9DeYPgBEplSGhmD&ipAddress=8.8.8.8

export default function IPLookUp() {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [ISP, setISP] = useState("");
  const [curInput, setCurInput] = useState("8.8.8.8");

  const handleChange = (e) => {
    setCurInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchAPI();
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_WyovYnh17ihNyl9DeYPgBEplSGhmD&ipAddress=${curInput}`
      );
      setCountry(response.data.location.country);
      setRegion(response.data.location.region);
      setTimeZone(response.data.location.timezone);
      setISP(response.data.isp);
    } catch (error) {
      toast.error("Invalid IP!");
    }
  };

  return (
    <div>
      <Toaster />
      <div className="flex flex-col gap-6 p-10 justify-center items-center">
        <h1 className="text-4xl">IP Look Up</h1>
        <div>
          <input
            className="border-2 border-gray-200 w-[50vh] h-10 text-2xl rounded-md px-2 py-6 shadow-md"
            onChange={handleChange}
            defaultValue={curInput}
            onKeyUp={handleKeyPress}
          />
        </div>
        <div className="flex  flex-row justify-between space-x-12 m-6 text-3xl border-2 p-6 rounded-lg shadow-lg">
          <h1>
            Country: <span className="text-blue-500">{country}</span>
          </h1>
          <h1>
            Region: <span className="text-blue-500">{region}</span>
          </h1>
          <h1>
            Timezone: <span className="text-blue-500">{timeZone}</span>
          </h1>
          <h1>
            ISP: <span className="text-blue-500">{ISP}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
