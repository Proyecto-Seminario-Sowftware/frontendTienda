<template>
  <div class="home">
    <div class="container-fluid">
      <!-- box-header -->
      <header>
        <img class="vuelogo" alt="Vue logo" src="img/logo.png" />

        <nav>
          <i id="menu-icon" class="fas fa-bars"></i>

          <ul>
            <li style="list-style: none; display: inline"></li>
            <li>
              <router-link to="/">Inicio</router-link>
            </li>
            <li style="list-style: none; display: inline"></li>
            <li>
              <a href="/iniciarSesion">Iniciar Sesion</a>
            </li>
            <li style="list-style: none; display: inline"></li>
            <li>
              <a href="/about">about</a>
            </li>
          </ul>
        </nav>
      </header>
      <!-- end box-header -->
    </div>

    <!-- top bar -->
    <div class="top-bar">
      <h1>portfolio</h1>
      <p>
        <a href="#">Home</a> / Portfolio
      </p>
    </div>
    <!-- end top bar -->

    <!-- main container -->
    <div class="main-container portfolio-inner clearfix">
      <!-- portfolio div -->
      <div class="portfolio-div">
        <div class="portfolio">
          <!-- portfolio_filter -->
          <div class="categories-grid wow fadeInLeft"></div>
          <!-- portfolio_filter -->

          <!-- portfolio_container -->
          <div class="no-padding portfolio_container clearfix">
            <!-- single work -->
            <div class="col-md-4 col-sm-6 fashion logo">
              <a href="single-project.html" class="portfolio_item">
                <img src="/img/portfolio/01.jpg" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                    <div class="item_info">
                      <span>Mockups in seconds</span>
                      <em>Fashion / Logo</em>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end single work -->

            <!-- single work -->
            <div class="col-md-4 col-sm-6 ads graphics">
              <a href="single-project.html" class="portfolio_item">
                <img src="/img/portfolio/03.jpg" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                    <div class="item_info">
                      <span>Floating mockups</span>
                      <em>Ads / Graphics</em>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end single work -->

            <!-- single work -->
            <div class="col-md-4 col-sm-12 photography">
              <a href="single-project.html" class="portfolio_item">
                <img src="/img/portfolio/02.jpg" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                    <div class="item_info">
                      <span>Photorealistic smartwatch</span>
                      <em>Photography</em>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end single work -->

            <!-- single work -->
            <div class="col-md-4 col-sm-6 fashion ads">
              <a href="single-project.html" class="portfolio_item">
                <img src="/img/portfolio/04.jpg" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                    <div class="item_info">
                      <span>Held by hands</span>
                      <em>Fashion / Ads</em>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end single work -->

            <!-- single work -->
            <div class="col-md-4 col-sm-6 graphics ads">
              <a href="single-project.html" class="portfolio_item">
                <img src="/img/portfolio/05.jpg" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                    <div class="item_info">
                      <span>Mobile devices</span>
                      <em>Graphics / Ads</em>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end single work -->

            <!-- single work -->
            <div class="col-md-4 col-sm-12 photography">
              <a href="single-project.html" class="portfolio_item">
                <img src="/img/portfolio/010.jpg" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                    <div class="item_info">
                      <span>Photorealistic smartwatch</span>
                      <em>Photography</em>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end single work -->

            <!-- single work -->
            <div class="col-md-4 col-sm-6 graphics ads">
              <a href="single-project.html" class="portfolio_item">
                <img src="/img/portfolio/06.jpg" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                    <div class="item_info">
                      <span>Mobile devices</span>
                      <em>Graphics / Ads</em>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end single work -->

            <!-- single work -->
            <div class="col-md-4 col-sm-6 graphics ads">
              <a href="single-project.html" class="portfolio_item">
                <img src="/img/portfolio/07.jpg" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                    <div class="item_info">
                      <span>Mobile devices</span>
                      <em>Graphics / Ads</em>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end single work -->

            <!-- single work -->
            <div class="col-md-4 col-sm-6 graphics ads">
              <a href="single-project.html" class="portfolio_item">
                <img src="/img/portfolio/08.jpg" alt="image" class="img-responsive" />
                <div class="portfolio_item_hover">
                  <div class="portfolio-border clearfix">
                    <div class="item_info">
                      <span>Mobile devices</span>
                      <em>Graphics / Ads</em>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end single work -->
          </div>
          <!-- end portfolio_container -->
        </div>
        <!-- portfolio -->
      </div>
      <!-- end portfolio div -->
    </div>
    <!-- end main container -->

    <!-- footer -->
    <footer>
      <div class="container-fluid">
        <p class="copyright">© Box Portfolio 2016</p>
      </div>
    </footer>
    <!-- end footer -->

    <!-- back to top -->
    <a href="#0" class="cd-top">
      <i class="ion-android-arrow-up"></i>
    </a>
    <!-- end back to top -->
  </div>
</template>
