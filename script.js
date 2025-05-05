let ul = document.getElementById("msg");

        function success(){
            let li = document.createElement("li")
            ul.appendChild(li)
            li.classList.add("greenMsg");
            li.innerHTML = `<i class="fa-sharp fa-solid fa-check"></i>Successfully submitted`;

            setTimeout(() => {
                li.remove()
            }, 4500);
        }

        function error(){
            let li = document.createElement("li")
            ul.appendChild(li)
            li.classList.add("redMsg");
            li.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>Please fix the error !`;

            setTimeout(() => {
                li.remove()
            }, 4500);
        }

        function invalid() {
            let li = document.createElement("li")
            ul.appendChild(li)
            li.classList.add("orgMsg");
            li.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff7300;"></i>Invalid input, check again`;

            setTimeout(() => {
                li.remove()
            }, 4500);
        }