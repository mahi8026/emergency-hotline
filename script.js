let love = 0;
    let coins = 100;
    let copies = 0;
    const starCost = 20; 

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
      if (coins < starCost) {
        alert("Not enough 🪙 coins to make a call!");
        return;
      }
      coins -= starCost;
      document.getElementById("starCount").textContent = " " + coins;
      alert(`Calling ${service} (${number})`);

      // add to history
      let history = document.getElementById("callHistory");
      let time = new Date().toLocaleTimeString();
      let li = document.createElement("li");
      li.textContent = `${service} (${number}) - ${time}`;
      history.prepend(li);
    }

    function clearHistory() {
      document.getElementById("callHistory").innerHTML = "";
    }