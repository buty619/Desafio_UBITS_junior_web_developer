import "isomorphic-fetch";
import { JSDOM } from "jsdom";

const htmlHome = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/pricingSection.css" />
    <title>UBITS</title>
    <script defer src="../js/home.js"></script>
  </head>
  <body>
    <nav class="navbar">
      <div class="navbar-container">
        <input type="checkbox" name="" id="checkbox" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li><a href="#home">Home</a></li>
          <li><a href="#sellers">Shop</a></li>
          <li><a href="#news">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="logo">
          <img src="../assets/Ubits-logo.png" alt="" style="width: 165px" />
        </div>
      </div>
    </nav>
    <section id="home">
      <div class="home_page">
        <div class="home_img">
          <img src="../assets/b5.jpeg" alt="img" />
        </div>
        <div class="home_txt">
          <p class="collectio">¡Bienvenido UBITS!</p>
          <h2>El HUB de aprendizaje<br />para empresas</h2>
          <div class="home_label">
            <p>
              Diseña, ejecuta y mide tus planes de
              <br />capacitación empresarial en un solo lugar.
            </p>
          </div>
          <button>
            <a href="#sellers">SHOP NOW</a><i class="bx bx-right-arrow-alt"></i>
          </button>
          <div class="home_social_icons">
            <a href="#"><i class="bx bxl-facebook"></i></a>
            <a href="#"><i class="bx bxl-twitter"></i></a>
            <a href="#"><i class="bx bxl-pinterest"></i></a>
            <a href="#"><i class="bx bxl-instagram"></i></a>
          </div>
        </div>
      </div>
    </section>
    <section id="pricing">
      <div class="pricing_container">
        <div class="column">
          <div class="pricing-card basic">
            <div class="pricing-header">
              <span class="plan-title">XXXX PLAN</span>
              <div class="price-circle">
                <span class="price-title">
                  <small>$</small><span>X.XX</span>
                </span>
                <span class="info">/ Month</span>
              </div>
            </div>
            <div class="badge-box">
              <span>Save XX%</span>
            </div>
            <ul>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
            </ul>
            <div class="buy-button-box">
              <a href="#" class="buy-now">BUY NOW</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="pricing-card eco">
            <div class="pricing-header">
              <span class="plan-title">XXXX PLAN</span>
              <div class="price-circle">
                <span class="price-title">
                  <small>$</small><span>XX.XX</span>
                </span>
                <span class="info">/ Month</span>
              </div>
            </div>
            <div class="badge-box">
              <span>Save XX%</span>
            </div>
            <ul>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
            </ul>
            <div class="buy-button-box">
              <a href="#" class="buy-now">BUY NOW</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="pricing-card pro">
            <div class="popular">POPULAR</div>
            <div class="pricing-header">
              <span class="plan-title">XXXX PLAN</span>
              <div class="price-circle">
                <span class="price-title">
                  <small>$</small><span>XX.XX</span>
                </span>
                <span class="info">/ Month</span>
              </div>
            </div>
            <div class="badge-box">
              <span>Save X%</span>
            </div>
            <ul>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
            </ul>
            <div class="buy-button-box">
              <a href="#" class="buy-now">BUY NOW</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="pricing-card business">
            <div class="pricing-header">
              <span class="plan-title">XXXX PLAN</span>
              <div class="price-circle">
                <span class="price-title">
                  <small>$</small><span>XX.XX</span>
                </span>
                <span class="info">/ Month</span>
              </div>
            </div>
            <div class="badge-box">
              <span>Save X%</span>
            </div>
            <ul>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
              <li>X XXXXX</li>
            </ul>
            <div class="buy-button-box">
              <a href="#" class="buy-now">BUY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer-container container">
        <div class="content_1">
          <img src="../assets/ubits.png" alt="logo" />
          <p>
            The customer is at the heart of our<br />unique business model,
            which includes<br />design.
          </p>
          <img src="../assets/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#sellers">Clothing Store</a>
          <a href="#sellers">Trending Shoes</a>
          <a href="#sellers">Accessories</a>
          <a href="#sellers">Sale</a>
        </div>
        <div class="content_3">
          <h4>SHOPPING</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="https://payment-method-sb.netlify.app/" target="_blank"
            >Payment Method</a
          >
          <a href="https://delivery-status-sb.netlify.app/" target="_blank"
            >Delivery</a
          >
          <a href="https://codepen.io/sandeshbodake/full/Jexxrv" target="_blank"
            >Return and Exchange</a
          >
        </div>
        <div class="content_4">
          <h4>NEWLETTER</h4>
          <p>
            Be the first to know about new<br />arrivals, look books, sales &
            promos!
          </p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  </body>
</html>
`;

const htmlPayment = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/payment.css" />
    <title>Payment</title>
    <script defer src="../js/payment.js"></script>
  </head>
  <body>
    <nav class="navbar">
      <div class="navbar-container">
        <input type="checkbox" name="" id="checkbox" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li><a href="#home">Home</a></li>
          <li><a href="#sellers">Shop</a></li>
          <li><a href="#news">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="logo">
          <img src="../assets/Ubits-logo.png" alt="" style="width: 165px" />
        </div>
      </div>
    </nav>
    <div class="card_container">
      <div class="payment">
        <div class="payment__dots">
          <svg
            width="65"
            height="115"
            viewBox="0 0 65 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="2.5" r="2.5" fill="#E0ECF7" />
            <circle cx="32.5" cy="2.5" r="2.5" fill="#E0ECF7" />
            <circle cx="47.5" cy="2.5" r="2.5" fill="#E0ECF7" />
            <circle cx="2.5" cy="2.5" r="2.5" fill="#E0ECF7" />
            <circle
              cx="17.5"
              cy="12.5"
              r="2.5"
              transform="rotate(90 17.5 12.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="32.5"
              cy="12.5"
              r="2.5"
              transform="rotate(90 32.5 12.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="47.5"
              cy="12.5"
              r="2.5"
              transform="rotate(90 47.5 12.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="17.5"
              cy="42.5"
              r="2.5"
              transform="rotate(90 17.5 42.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="47.5"
              cy="62.5"
              r="2.5"
              transform="rotate(90 47.5 62.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="62.5"
              cy="2.5"
              r="2.5"
              transform="rotate(90 62.5 2.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="47.5"
              cy="82.5"
              r="2.5"
              transform="rotate(90 47.5 82.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="62.5"
              cy="22.5"
              r="2.5"
              transform="rotate(90 62.5 22.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="47.5"
              cy="42.5"
              r="2.5"
              transform="rotate(90 47.5 42.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="32.5"
              cy="42.5"
              r="2.5"
              transform="rotate(90 32.5 42.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="32.5"
              cy="62.5"
              r="2.5"
              transform="rotate(90 32.5 62.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="17.5"
              cy="22.5"
              r="2.5"
              transform="rotate(90 17.5 22.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="32.5"
              cy="22.5"
              r="2.5"
              transform="rotate(90 32.5 22.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="47.5"
              cy="22.5"
              r="2.5"
              transform="rotate(90 47.5 22.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="17.5"
              cy="52.5"
              r="2.5"
              transform="rotate(90 17.5 52.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="17.5"
              cy="72.5"
              r="2.5"
              transform="rotate(90 17.5 72.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="47.5"
              cy="72.5"
              r="2.5"
              transform="rotate(90 47.5 72.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="62.5"
              cy="12.5"
              r="2.5"
              transform="rotate(90 62.5 12.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="47.5"
              cy="92.5"
              r="2.5"
              transform="rotate(90 47.5 92.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="62.5"
              cy="32.5"
              r="2.5"
              transform="rotate(90 62.5 32.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="47.5"
              cy="52.5"
              r="2.5"
              transform="rotate(90 47.5 52.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="32.5"
              cy="52.5"
              r="2.5"
              transform="rotate(90 32.5 52.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="17.5"
              cy="32.5"
              r="2.5"
              transform="rotate(90 17.5 32.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="32.5"
              cy="32.5"
              r="2.5"
              transform="rotate(90 32.5 32.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="47.5"
              cy="32.5"
              r="2.5"
              transform="rotate(90 47.5 32.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="17.5"
              cy="62.5"
              r="2.5"
              transform="rotate(90 17.5 62.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="17.5"
              cy="82.5"
              r="2.5"
              transform="rotate(90 17.5 82.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="92.5"
              r="2.5"
              transform="rotate(90 2.5 92.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="112.5"
              r="2.5"
              transform="rotate(90 2.5 112.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="72.5"
              r="2.5"
              transform="rotate(90 2.5 72.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="82.5"
              r="2.5"
              transform="rotate(90 2.5 82.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="102.5"
              r="2.5"
              transform="rotate(90 2.5 102.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="12.5"
              r="2.5"
              transform="rotate(90 2.5 12.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="42.5"
              r="2.5"
              transform="rotate(90 2.5 42.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="22.5"
              r="2.5"
              transform="rotate(90 2.5 22.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="52.5"
              r="2.5"
              transform="rotate(90 2.5 52.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="32.5"
              r="2.5"
              transform="rotate(90 2.5 32.5)"
              fill="#E0ECF7"
            />
            <circle
              cx="2.5"
              cy="62.5"
              r="2.5"
              transform="rotate(90 2.5 62.5)"
              fill="#E0ECF7"
            />
          </svg>
        </div>
        <div class="billing_details">
          <div>
            <h2>Billing Plan:</h2>
            <span>XXXXXX</span>
          </div>
          <div>
            <h2>Price:</h2>
            <span>$XX.XX</span>
          </div>
        </div>
        <div class="card">
          <div class="card__visa">
            <svg
              class="visa"
              enable-background="new 0 0 291.764 291.764"
              version="1.1"
              viewbox="5 70 290 200"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="svgcolor"
                d="m119.26 100.23l-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896 0.1-3.756 4.24-7.604 13.485-7.604 7.604-0.191 13.193 1.596 17.433 3.374l2.124 0.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-0.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-0.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152 0.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c0.474 0.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zm-160.86-54.796l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021h-24.764v-0.01z"
                fill="#FFFFFF"
              ></path>
              <path
                class="svgtipcolor"
                d="m51.916 111.98c-1.787-6.948-7.486-11.634-15.226-11.734h-36.316l-0.374 1.686c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>

          <div class="card__number">0000&nbsp;0000&nbsp;0000&nbsp;0000</div>
          <div class="card__name">
            <h3>Card Holder</h3>
            <p id="card-name">Mrs Kate Smith</p>
          </div>

          <div class="card__expiry">
            <h3>Valid Thru</h3>
            <p><span id="month">MM</span>/<span id="year">YY</span></p>
          </div>
        </div>

        <form class="form">
          <h2>Payment Details</h2>

          <div class="form__name form__detail">
            <label for="name">Cardholder Name</label>
            <ion-icon name="person-outline"></ion-icon>
            <input
              type="text"
              placeholder="Mrs Kate Smith"
              id="name"
              maxlength="24"
            />
            <div class="alert" id="alert-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3163 9.00362C11.8593 10.0175 11.1335 11.25 9.99343 11.25H2.00657C0.866539 11.25 0.140732 10.0175 0.683711 9.00362L4.67714 1.54691C5.24618 0.484362 6.75381 0.484362 7.32286 1.54691L11.3163 9.00362ZM5.06238 4.49805C5.02858 3.95721 5.4581 3.5 6 3.5C6.5419 3.5 6.97142 3.95721 6.93762 4.49805L6.79678 6.75146C6.77049 7.17221 6.42157 7.5 6 7.5C5.57843 7.5 5.22951 7.17221 5.20322 6.75146L5.06238 4.49805ZM6 8C5.44772 8 5 8.44772 5 9C5 9.55229 5.44772 10 6 10C6.55228 10 7 9.55229 7 9C7 8.44772 6.55228 8 6 8Z"
                  fill="#FF6A96"
                />
              </svg>
              Full name required
            </div>
          </div>

          <div class="form__number form__detail">
            <label for="number">Card Number</label>
            <ion-icon name="card-outline"></ion-icon>
            <input type="text" placeholder="0000 0000 0000 0000" id="number" />
            <div class="alert" id="alert-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3163 9.00362C11.8593 10.0175 11.1335 11.25 9.99343 11.25H2.00657C0.866539 11.25 0.140732 10.0175 0.683711 9.00362L4.67714 1.54691C5.24618 0.484362 6.75381 0.484362 7.32286 1.54691L11.3163 9.00362ZM5.06238 4.49805C5.02858 3.95721 5.4581 3.5 6 3.5C6.5419 3.5 6.97142 3.95721 6.93762 4.49805L6.79678 6.75146C6.77049 7.17221 6.42157 7.5 6 7.5C5.57843 7.5 5.22951 7.17221 5.20322 6.75146L5.06238 4.49805ZM6 8C5.44772 8 5 8.44772 5 9C5 9.55229 5.44772 10 6 10C6.55228 10 7 9.55229 7 9C7 8.44772 6.55228 8 6 8Z"
                  fill="#FF6A96"
                />
              </svg>
              Invalid card number
            </div>
          </div>

          <div class="form__expiry form__detail">
            <label for="date">Exp Date</label>
            <ion-icon name="calendar-outline"></ion-icon>
            <input type="text" placeholder="MM/YY" id="date" />
            <div class="alert" id="alert-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3163 9.00362C11.8593 10.0175 11.1335 11.25 9.99343 11.25H2.00657C0.866539 11.25 0.140732 10.0175 0.683711 9.00362L4.67714 1.54691C5.24618 0.484362 6.75381 0.484362 7.32286 1.54691L11.3163 9.00362ZM5.06238 4.49805C5.02858 3.95721 5.4581 3.5 6 3.5C6.5419 3.5 6.97142 3.95721 6.93762 4.49805L6.79678 6.75146C6.77049 7.17221 6.42157 7.5 6 7.5C5.57843 7.5 5.22951 7.17221 5.20322 6.75146L5.06238 4.49805ZM6 8C5.44772 8 5 8.44772 5 9C5 9.55229 5.44772 10 6 10C6.55228 10 7 9.55229 7 9C7 8.44772 6.55228 8 6 8Z"
                  fill="#FF6A96"
                />
              </svg>
              Invalid date
            </div>
          </div>

          <div class="form__cvv form__detail">
            <label for="cvv"
              >CVV <ion-icon name="information-circle" class="info"></ion-icon
            ></label>
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" placeholder="0000" id="cvv" maxlength="4" />
            <div class="alert" id="alert-4">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3163 9.00362C11.8593 10.0175 11.1335 11.25 9.99343 11.25H2.00657C0.866539 11.25 0.140732 10.0175 0.683711 9.00362L4.67714 1.54691C5.24618 0.484362 6.75381 0.484362 7.32286 1.54691L11.3163 9.00362ZM5.06238 4.49805C5.02858 3.95721 5.4581 3.5 6 3.5C6.5419 3.5 6.97142 3.95721 6.93762 4.49805L6.79678 6.75146C6.77049 7.17221 6.42157 7.5 6 7.5C5.57843 7.5 5.22951 7.17221 5.20322 6.75146L5.06238 4.49805ZM6 8C5.44772 8 5 8.44772 5 9C5 9.55229 5.44772 10 6 10C6.55228 10 7 9.55229 7 9C7 8.44772 6.55228 8 6 8Z"
                  fill="#FF6A96"
                />
              </svg>
              Invalid CVV
            </div>
          </div>

          <button type="submit" class="form__btn">Confirm</button>
        </form>
      </div>
    </div>
    <footer>
      <div class="footer-container container">
        <div class="content_1">
          <img src="../assets/ubits.png" alt="logo" />
          <p>
            The customer is at the heart of our<br />unique business model,
            which includes<br />design.
          </p>
          <img src="../assets/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#sellers">Clothing Store</a>
          <a href="#sellers">Trending Shoes</a>
          <a href="#sellers">Accessories</a>
          <a href="#sellers">Sale</a>
        </div>
        <div class="content_3">
          <h4>SHOPPING</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="https://payment-method-sb.netlify.app/" target="_blank"
            >Payment Method</a
          >
          <a href="https://delivery-status-sb.netlify.app/" target="_blank"
            >Delivery</a
          >
          <a href="https://codepen.io/sandeshbodake/full/Jexxrv" target="_blank"
            >Return and Exchange</a
          >
        </div>
        <div class="content_4">
          <h4>NEWLETTER</h4>
          <p>
            Be the first to know about new<br />arrivals, look books, sales &
            promos!
          </p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  </body>
</html>
`;

const htmlBill = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/bill.css" />
    <title>Bill</title>
    <script defer src="../js/bill.js"></script>
  </head>
  <body>
    <nav class="navbar">
      <div class="navbar-container">
        <input type="checkbox" name="" id="checkbox" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li><a href="#home">Home</a></li>
          <li><a href="#sellers">Shop</a></li>
          <li><a href="#news">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="logo">
          <img src="../assets/Ubits-logo.png" alt="" style="width: 165px" />
        </div>
      </div>
    </nav>
    <section>
      <div class="container_bill">
        <div class="receipt_box">
          <div class="head">
            <div class="logo">
              <svg height="42" width="42" viewBox="0 0 64 64">
                <path
                  class="path1"
                  fill="rgb(0, 157, 223)"
                  d="M58.125 19.288c-2.987 13.262-12.212 20.262-26.75 20.262h-4.837l-3.363 21.35h-4.050l-0.212 1.375c-0.137 0.913 0.563 1.725 1.475 1.725h10.35c1.225 0 2.263-0.888 2.462-2.1l0.1-0.525 1.95-12.362 0.125-0.675c0.188-1.212 1.237-2.1 2.462-2.1h1.538c10.025 0 17.875-4.075 20.175-15.85 0.862-4.475 0.538-8.275-1.425-11.1z"
                ></path>
                <path
                  class="path2"
                  fill="rgb(0, 46, 135)"
                  d="M51.938 4.825c-2.962-3.375-8.325-4.825-15.175-4.825h-19.887c-1.4 0-2.6 1.012-2.813 2.4l-8.287 52.525c-0.162 1.038 0.638 1.975 1.688 1.975h12.287l3.087-19.563-0.1 0.612c0.212-1.388 1.4-2.4 2.8-2.4h5.837c11.462 0 20.438-4.65 23.063-18.125 0.075-0.4 0.15-0.788 0.2-1.163 0.775-4.975 0-8.375-2.7-11.438z"
                ></path>
              </svg>
            </div>
            <div class="number">
              <div class="date">20XX/XX/XX</div>
              <div class="ref">of-113</div>
            </div>
          </div>
          <div class="body">
            <div class="info">
              <div class="welcome">
                Hi, <span class="username">Acá el nombre</span>
              </div>
              <p>You've purchased (1) items in our store</p>
            </div>
            <div class="cart">
              <div class="title">cart</div>
              <div class="content">
                <ul class="cart_list">
                  <li class="cart_item">
                    <span class="index">1</span>
                    <span class="name">Acá el nombre del paquete</span>
                    <span class="price">$XX.XX</span>
                  </li>
                </ul>
                <div class="total">
                  <span>total</span>
                  <span class="total_price">$XX.XX</span>
                </div>
              </div>
            </div>
          </div>
          <div class="foot">
            <img
              src="https://i.ibb.co/c8CQvBq/barcode.png"
              alt="barcode"
              class="barcode"
            />
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer-container container">
        <div class="content_1">
          <img src="../assets/ubits.png" alt="logo" />
          <p>
            The customer is at the heart of our<br />unique business model,
            which includes<br />design.
          </p>
          <img src="../assets/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#sellers">Clothing Store</a>
          <a href="#sellers">Trending Shoes</a>
          <a href="#sellers">Accessories</a>
          <a href="#sellers">Sale</a>
        </div>
        <div class="content_3">
          <h4>SHOPPING</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="https://payment-method-sb.netlify.app/" target="_blank"
            >Payment Method</a
          >
          <a href="https://delivery-status-sb.netlify.app/" target="_blank"
            >Delivery</a
          >
          <a href="https://codepen.io/sandeshbodake/full/Jexxrv" target="_blank"
            >Return and Exchange</a
          >
        </div>
        <div class="content_4">
          <h4>NEWLETTER</h4>
          <p>
            Be the first to know about new<br />arrivals, look books, sales &
            promos!
          </p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  </body>
</html>
`;

const successPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;34m\x1b[38;5;15m";
const failPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;208m\x1b[38;5;15m";

describe("testing reto JuniorJS developer", () => {
  let testStatus = false;
  let passTests = 0;
  let failedTest = 0;

  afterEach(() => {
    if (testStatus) {
      passTests += 1;
    } else {
      failedTest += 1;
    }

    testStatus = false;
  });

  afterAll(() => {
    const success =
      "🚀🚀 EXCELENTE TRABAJO COMPLETASTE LA PRUEBA DE MANERA SATISFACTORIA ESTE ES EL CÓDIGO SECRETO: UBITSJUJS0003512 🚀🚀 \x1b[0m";
    const error =
      "❌❌ AUN NO HAS SUPERADO LA PRUEBA POR FAVOR VERIFICA QUE CUMPLAS CON TODOS LOS CRITERIOS SOLICITADOS ❌❌ \x1b[0m";
    if (failedTest > 0) {
      console.log(`${failPrintStyle} ${error}`);
    } else {
      console.log(`${successPrintStyle} ${success}`);
    }
  });

  describe("test home page", () => {
    it("hace el render de los planes con la información correcta", (done) => {
      const dom = new JSDOM(htmlHome);
      global.document = dom.window.document;
      global.window = dom.window;
      require("../js/home");
      setTimeout(() => {
        const cardBasic = document.querySelector(`.pricing-card.basic`);
        const cardBasicTitle = cardBasic.querySelector(".plan-title");
        const cardBasicPrice = cardBasic.querySelector(".price-title");
        const cardBasicDiscount = cardBasic.querySelector(".badge-box");
        const cardBusiness = document.querySelector(`.pricing-card.business`);
        const cardBusinessTitle = cardBusiness.querySelector(".plan-title");
        const cardBusinessPrice = cardBusiness.querySelector(".price-title");
        const cardBusinessDiscount = cardBusiness.querySelector(".badge-box");
        expect(cardBasicTitle.innerHTML).toBe("BASIC PLAN");
        expect(cardBasicPrice.textContent).toContain("$6.95");
        expect(cardBasicDiscount.textContent).toContain("Save 35%");
        expect(cardBusinessTitle.innerHTML).toBe("BUSINESS PLAN");
        expect(cardBusinessPrice.textContent).toContain("59.95");
        expect(cardBusinessDiscount.textContent).toContain("Save 35%");
        testStatus = true;
        done();
      }, 1000);
    });
  });

  describe("test payment page", () => {
    it("hace el render correcto del plan seleccionado", (done) => {
      const {
        window,
        window: { document },
      } = new JSDOM(htmlPayment);
      global.window = window;
      global.document = document;
      const urlParamsMock = {
        get: jest.fn().mockReturnValueOnce("test").mockReturnValueOnce("33.22"),
      };
      global.URLSearchParams = jest
        .fn()
        .mockImplementation(() => urlParamsMock);
      require("../js/payment");
      setTimeout(() => {
        const billingDetails = document.querySelector(".billing_details");
        const billingDetailsSpan = billingDetails.querySelectorAll("span");
        expect(billingDetailsSpan[0].innerHTML).toBe("test");
        expect(billingDetailsSpan[1].innerHTML).toBe("33.22");
        testStatus = true;
        done();
      }, 1000);
    });
    it("probar validación y error de input name", (done) => {
      setTimeout(() => {
        const name = document.getElementById("name");
        const alert = document.getElementById("alert-1");
        const e = new window.Event("input");
        name.dispatchEvent(e);
        const opacity = window
          .getComputedStyle(alert)
          .getPropertyValue("opacity");
        expect(opacity).toBe("1");
        name.value = "test";
        name.dispatchEvent(e);
        const newOpacity = window
          .getComputedStyle(alert)
          .getPropertyValue("opacity");
        expect(newOpacity).toBe("0");
        testStatus = true;
        done();
      }, 1000);
    });
    it("probar validación y error de input number", (done) => {
      setTimeout(() => {
        const number = document.getElementById("number");
        const alert = document.getElementById("alert-2");
        const e = new window.Event("input");
        number.value = "test";
        number.dispatchEvent(e);
        const opacity = window
          .getComputedStyle(alert)
          .getPropertyValue("opacity");
        expect(opacity).toBe("1");
        number.value = "1234567890123456789";
        number.dispatchEvent(e);
        const newOpacity = window
          .getComputedStyle(alert)
          .getPropertyValue("opacity");
        expect(newOpacity).toBe("0");
        testStatus = true;
        done();
      }, 1000);
    });
    it("probar validación y error de input date", (done) => {
      setTimeout(() => {
        const date = document.getElementById("date");
        const alert = document.getElementById("alert-3");
        const e = new window.Event("input");
        const actualDate = new Date();
        const month = `0${actualDate.getMonth() + 2}`;
        const year = Number(actualDate.getFullYear().toString().substr(-2));
        date.value = "35/35";
        date.dispatchEvent(e);
        const opacity = window
          .getComputedStyle(alert)
          .getPropertyValue("opacity");
        expect(opacity).toBe("1");
        date.value = `${month}/${year}`;
        date.dispatchEvent(e);
        const newOpacity = window
          .getComputedStyle(alert)
          .getPropertyValue("opacity");
        expect(newOpacity).toBe("0");
        testStatus = true;
        done();
      }, 1000);
    });
    it("probar validación y error de input cvv", (done) => {
      setTimeout(() => {
        const cvv = document.getElementById("cvv");
        const alert = document.getElementById("alert-4");
        const e = new window.Event("input");
        cvv.value = "12";
        cvv.dispatchEvent(e);
        const opacity = window
          .getComputedStyle(alert)
          .getPropertyValue("opacity");
        expect(opacity).toBe("1");
        cvv.value = "123";
        cvv.dispatchEvent(e);
        const newOpacity = window
          .getComputedStyle(alert)
          .getPropertyValue("opacity");
        expect(newOpacity).toBe("0");
        testStatus = true;
        done();
      }, 1000);
    });
    it("probar setting de la data en la card", (done) => {
      setTimeout(() => {
        const name = document.getElementById("name");
        const number = document.getElementById("number");
        const date = document.getElementById("date");
        const e = new window.Event("input");
        name.value = "cristian";
        name.dispatchEvent(e);
        expect(document.getElementById("card-name").innerHTML).toBe("cristian");
        number.value = "1234567890123456";
        number.dispatchEvent(e);
        expect(document.querySelector(".card__number").innerHTML).toBe(
          "1234 5678 9012 3456"
        );
        date.value = "35/35";
        date.dispatchEvent(e);
        expect(document.getElementById("month").innerHTML).toBe("35");
        expect(document.getElementById("year").innerHTML).toBe("35");
        testStatus = true;
        done();
      }, 1000);
    });
    it("probar validación de error no data submit form", (done) => {
      setTimeout(() => {
        const form = document.querySelector(".form");
        const name = document.getElementById("name");
        const number = document.getElementById("number");
        const date = document.getElementById("date");
        const cvv = document.getElementById("cvv");
        const e = new window.Event("submit");
        const alert1 = document.getElementById("alert-1");
        const alert2 = document.getElementById("alert-2");
        const alert3 = document.getElementById("alert-3");
        const alert4 = document.getElementById("alert-4");
        name.value = "";
        number.value = "";
        date.value = "";
        cvv.value = "";
        form.dispatchEvent(e);
        const opacity1 = window
          .getComputedStyle(alert1)
          .getPropertyValue("opacity");
        const opacity2 = window
          .getComputedStyle(alert2)
          .getPropertyValue("opacity");
        const opacity3 = window
          .getComputedStyle(alert3)
          .getPropertyValue("opacity");
        const opacity4 = window
          .getComputedStyle(alert4)
          .getPropertyValue("opacity");
        expect(opacity1).toBe("1");
        expect(opacity2).toBe("1");
        expect(opacity3).toBe("1");
        expect(opacity4).toBe("1");
        testStatus = true;
        done();
      }, 1000);
    });
    it("probar validación de error en la data submit form", (done) => {
      setTimeout(() => {
        const form = document.querySelector(".form");
        const name = document.getElementById("name");
        const number = document.getElementById("number");
        const date = document.getElementById("date");
        const cvv = document.getElementById("cvv");
        const e = new window.Event("submit");
        const alert1 = document.getElementById("alert-1");
        const alert2 = document.getElementById("alert-2");
        const alert3 = document.getElementById("alert-3");
        const alert4 = document.getElementById("alert-4");
        name.value = "";
        number.value = "1234";
        date.value = "35/35";
        cvv.value = "12";
        form.dispatchEvent(e);
        const opacity1 = window
          .getComputedStyle(alert1)
          .getPropertyValue("opacity");
        const opacity2 = window
          .getComputedStyle(alert2)
          .getPropertyValue("opacity");
        const opacity3 = window
          .getComputedStyle(alert3)
          .getPropertyValue("opacity");
        const opacity4 = window
          .getComputedStyle(alert4)
          .getPropertyValue("opacity");
        expect(opacity1).toBe("1");
        expect(opacity2).toBe("1");
        expect(opacity3).toBe("1");
        expect(opacity4).toBe("1");
        testStatus = true;
        done();
      }, 1000);
    });
  });

  describe("test bill page", () => {
    it("hace el render de la factura con la información correcta", (done) => {
      const dom = new JSDOM(htmlBill);
      global.document = dom.window.document;
      global.window = dom.window;
      const urlParamsMock = {
        get: jest
          .fn()
          .mockReturnValueOnce("cristian")
          .mockReturnValueOnce("test")
          .mockReturnValueOnce("33.22"),
      };
      global.URLSearchParams = jest
        .fn()
        .mockImplementation(() => urlParamsMock);
      require("../js/bill");
      setTimeout(() => {
        const userNameElement = document.querySelector("span.username");
        const planNameElement = document.querySelector("span.name");
        const priceElement = document.querySelector("span.price");
        const priceTotalElement = document.querySelector("span.total_price");
        const dateElement = document.querySelector("div.date");
        const actualDate = new Date();
        const month = actualDate.getMonth();
        const year = actualDate.getFullYear();
        const day = actualDate.getDay();
        const fullDate = `${year}/${month}/${day}`;
        expect(userNameElement.innerHTML).toBe("cristian");
        expect(planNameElement.innerHTML).toBe("test");
        expect(priceElement.innerHTML).toBe("33.22");
        expect(priceTotalElement.innerHTML).toBe("33.22");
        expect(dateElement.innerHTML).toBe(fullDate);
        testStatus = true;
        done();
      }, 1000);
    });
  });
});
