let love = 0;
  let coins = 100;
  let copies = 0;
  const coinCost = 20; 

   function addLove() {
      love++;
      document.getElementById("loveCount").textContent = " " + love;
    }

    function copyNumber(number) {
      navigator.clipboard.writeText(number);
      copies++;
      document.getElementById("copyCount").textContent = "Copy " + copies;
      alert("Copied: " + number);
    }

    function makeCall(service, number) {
      if (coins < coinCost) {
        alert("Not enough coins to make a call!");
        return;
      }
      coins -= coinCost;
      document.getElementById("coinCount").textContent = " " + coins;
      alert(`Calling ${service} (${number})`);

      // add  history part
      let history = document.getElementById("callHistory");
      let time = new Date().toLocaleTimeString();
      let li = document.createElement("li");
      li.textContent = `${service} (${number}) - ${time}`;
      history.prepend(li);
    }

    function clearHistory() {
      document.getElementById("callHistory").innerHTML = "";
    }