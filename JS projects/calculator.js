<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1 user-scalable=no, shrink-to-fit=no">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Simple Calculator Harsh Trivedi</title>
	<link rel="stylesheet" href="./styles/style.css">
	<link href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap" rel="stylesheet">
	<!-- Common Tags -->
    <meta content='#171825' name='theme-color' />
    <meta name="keywords"
        content="Simple JavaScript Calculator, Harsh, JavaScript, Calculator, JavaScript Calculator, JSCalci, JavaScriptCalci, Harsh Trivedi">
    <!-- Open Graph general (Facebook, Pinterest & Google+) -->
    <meta property="og:title" content="Simple JavaScript Calculator" />
    <meta property="og:description"
        content="Simple JavaScript Calculator by Harsh Trivedi" />
    <meta property="og:image"
        content="https://raw.github.com/harsh98trivedi/Simple-JavaScript-Calculator/master/images/meta.jpg" />
    <meta property="og:url" content="https://harsh98trivedi.github.io/Simple-JavaScript-Calculator/" />
    <meta property="og:site_name" content="Simple JavaScript Calculator" />
    <meta property="og:locale" content="en_US" />
    <meta property="fb:admins" content="245221532650178" />
    <meta property="og:type" content="website" />
    <meta content='https://www.facebook.com/TheHarshTrivedi' property='article:author' />
    <meta property="og:url" content="https://harsh98trivedi.github.io/Simple-JavaScript-Calculator/" />
    <!-- Search Engine -->
    <meta property="description"
        content="Simple JavaScript Calculator by Harsh Trivedi" />
    <meta property="image"
        content="https://raw.github.com/harsh98trivedi/Simple-JavaScript-Calculator/master/images/meta.jpg" />
    <!-- Schema.org for Google -->
    <meta itemprop="name" content="Simple JavaScript Calculator" />
    <meta itemprop="description"
        content="Simple JavaScript Calculator by Harsh Trivedi" />
    <meta itemprop="image"
        content="https://raw.github.com/harsh98trivedi/Simple-JavaScript-Calculator/master/images/meta.jpg" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="Simple JavaScript Calculator" />
    <meta property="twitter:description"
        content="Simple JavaScript Calculator by Harsh Trivedi" />
    <meta property="twitter:creator" content="@harsh98trivedi" />
    <meta property="twitter:creator:id" content="@harsh98trivedi" />
    <meta property="twitter:image:src"
        content="https://raw.github.com/harsh98trivedi/Simple-JavaScript-Calculator/master/images/meta.jpg" />
	<meta property="twitter:image" content="Calculator by Harsh Trivedi" />
	<link rel='icon' type='image/x-icon' href='./images/favicon.ico' />
</head>
<body>
    <div class="toggle-container">
        <label class="toggle-switch">
            <input type="checkbox" id="toggle-mode" />
            <span class="toggle-slider"></span>
        </label>
    </div>
	<div class="container">
        <h1>
            <a style="text-decoration: none; color: #f1c40f; margin-left: 1.25rem; cursor: pointer;" onclick="location.reload();">CALCULATOR</a>
            <img id="historybutton" src="./images/history.png">	
        </h1>
        <div class="calculator">
            <input type="text" name="screen" id="answer" readonly>
            <table>
                <tr>
                    <td><button>(</button></td>
                    <td><button>)</button></td>
                    <td>
                        <div class="row">
                            <div class="col">
                                <button style="background-color: #f01600; font-weight: bold; color: #ecf0f1; width: 8vw;" onclick="clearAll()">C</button>
                            </div>
                            <div class="col">
                                <button style="background-color: #f01600; font-weight: bold; color: #ecf0f1;width: 8vw;" onclick="deleteLastEntry()">CE</button>
                            </div>
                        </div>
                    </td>
                    <td><button>%</button></td>
                </tr>
                <tr>
                    <td><button>7</button></td>
                    <td><button>8</button></td>
                    <td><button>9</button></td>
                    <td><button>X</button></td>
                </tr>
                <tr>
                    <td><button>4</button></td>
                    <td><button>5</button></td>
                    <td><button>6</button></td>
                    <td><button>-</button></td>
                </tr>
                <tr>
                    <td><button>1</button></td>
                    <td><button>2</button></td>
                    <td><button>3</button></td>
                    <td><button>+</button></td>
                </tr>
                <tr>
                    <td><button>0</button></td>
                    <td><button style="font-weight: bold;">.</button></td>
                    <td><button>/</button></td>
                    <td><button style="background-color: #25db72; font-weight: bold; color: #ecf0f1;">=</button></td>
                </tr>
            </table>
            <hr style="max-width: 50vw;">
            <div style="font-size:1rem; display: flex; align-items: center; justify-content: center;">
                Made with <img style="margin: 0.15rem;" src="./images/heart.png"> by <a style="text-decoration: none; color: #f1c40f; margin-left: 0.25rem;" target="_blank" href="https://harsh98trivedi.github.io">Harsh Trivedi</a>
            </div>
        </div>
	</div>
    <div id="bar1" class = "bars"></div>
    <div id="bar2" class = "bars"></div>
    <div id="history"></div>
    <div id="turn">
        PLEASE TURN YOUR DEVICE
    </div>
</body>

<script src="./scripts/hist.js"></script>
<script src="./scripts/calc.js"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-70447982-5"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-70447982-5');
</script>
<script>
	const toggleMode = document.getElementById('toggle-mode');
	const container = document.querySelector('.container');

	toggleMode.addEventListener('change', function() {
		container.classList.toggle('dark-mode');
	});

    document.addEventListener('keydown', function (event) {
        handleKeyPress(event.key);
    });

    // This function will be responsible for handling the button press from the keyboard..Try thses key also if want you can also chnage these settings,...
    function handleKeyPress(key) {
    //  "Enter" key is pressed, trigger the "=" button press
        if (key === 'Enter') {
            handleButtonPress('=');
        }
        // "Delete" or "Backspace" key is pressed, trigger the "CE" button press
        if (key === 'Delete' || key === 'Backspace') {
            handleButtonPress('CE');
        }
        //number key is pressed, trigger the corresponding number button press
        if (/[0-9]/.test(key)) {
            handleButtonPress(key);
        }
        //  operator key is pressed (+, -, *, /), trigger the corresponding operator button press
        if (/[\+\-\*\/%]/.test(key)) {
            handleButtonPress(key);
        }
    }
    function handleButtonPress(value) {
        // This function simulates the button press of the calculator for the given value
        // Find the corresponding button element based on the value
        const button = document.querySelector(`button[value="${value}"]`);
        if (button) {
            button.click();
        }
    }
</script>
</html>
