import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* <!--==================== FOOTER ====================--> */}
        <footer class="footer">
            <div class="footer__container container">
                <h1 class="footer__title">Sudeep Aryan</h1>
                <p>Full Stack Developer</p>
                <ul class="fotter__list" >
                    <li>
                        <a href="#home" class="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#skills" class="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#projects" class="footer__link">Projects</a>
                    </li>

                </ul>

                <ul class="footer__social" >
                    <a href="https://www.linkedin.com/" target="_blank" class="footer__social-link">
                    <i class="ri-linkedin-box-line"></i>
                    </a>

                    <a href="https://github.com/" target="_blank" class="footer__social-link">
                        <i class="ri-github-line"></i>
                    </a>
                </ul>

                <span class="fotter" >
                    &#169; Copyright. All rights reserved
                </span>
            </div>
        </footer>
    </div>
  )
}

export default Footer