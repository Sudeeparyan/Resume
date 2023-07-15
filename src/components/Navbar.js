import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="nav container" >
                <a href="sudeep" class="nav__logo">
                    Sudeep Aryan
                </a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list grid">
                        <li class="nav__item" >
                            <a href="#home" class="nav__link active-link " >
                                <i class="ri-home-2-line"></i> Home
                            </a>
                        </li>

                        <li class="nav__item" >
                            <a href="#skills" class="nav__link" >
                                <i class="ri-trophy-line"></i>Skills
                            </a>
                        </li>

                        <li class="nav__item" >
                            <a href="#qualification" class="nav__link" >
                                <i class="ri-book-open-line"></i>Qualification
                            </a>
                        </li>

                        <li class="nav__item" >
                            <a href="#services" class="nav__link" >
                                <i class="ri-briefcase-4-line"></i> Services
                            </a>
                        </li>

                        <li class="nav__item" >
                            <a href="#projects" class="nav__link" >
                                <i class="ri-landscape-line"></i> Projects
                            </a>
                        </li>

                        <li class="nav__item" >
                            <a href="#contact" class="nav__link" >
                                <i class="ri-message-line"></i> Contact
                            </a>
                        </li>
                    </ul>

                    {/* <!---Close Button-----> */}
                    <div class="nav__close" id="nav-close" >
                        <i class="ri-close-circle-line"></i>
                    </div>
                </div>
                <div class="nav__buttons" >
                    {/* <!--Theme change button --> */}
                    <i class="ri-moon-line change-theme" id="theme-button"></i>

                    {/* <!-- Toggle button --> */}
                    <div class="nav__toggle" id="nav-toggle" >
                        <i class="ri-menu-fill"></i>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar