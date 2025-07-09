import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:12px;border:none;font-family:pretendard,-apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif}
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word;outline:none;}
button, input {-webkit-border-radius:0;border-radius:0;border:none;outline: none;}
button {background-color:transparent;border:none;outline: none;}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}

#root {
	display: flex;
	flex-direction: column;

	min-height: 100vh;
  width: 100%;
	

}

// 초기 html 설정
html {
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;

	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 

	/* @media (max-width: 360px) {
		font-size:12px;
	} */

 

}
.goog-te-banner-frame.skiptranslate,
iframe.goog-te-banner-frame {
  display: none !important;
}

.goog-logo-link {
  display: none !important;
}

.goog-te-gadget {
  font-size: 0 !important;
}

body {
  top: 0 !important;
}

.skiptranslate {
  display: none !important;
}

body {
	width: 100vw;
	background-color: white;
	color: black;
  font-synthesis: none;
	scrollbar-width: none; 
	-ms-overflow-style: none;

	::-webkit-scrollbar {
    display: none;
}

}

html, body {
  height: auto !important;
  overflow: visible !important;
}


*::-webkit-scrollbar {
  display: none;
}

* {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}

&:focus {
    outline: none;
  }

  button {
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
}

button:focus,
button:active {
  outline: none;
  border: none;
  box-shadow: none;
}

@font-face {
    font-family: 'pretendard';
    src: url("/fonts/PretendardVariable.woff2") format('woff2');
}


`;

export default GlobalStyle;
