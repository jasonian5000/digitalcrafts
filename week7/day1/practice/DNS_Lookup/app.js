import dns from "dns";
import { createInterface } from "readline";
let readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Domain Name: ", function (url) {
  readline.close();
  dns.lookup(url, function (error, address) {
    if (error) {
      console.log(error.message);
      return;
    }
    console.log("IP Address: ", address);
  });
});
