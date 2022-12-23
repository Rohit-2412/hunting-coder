import React from 'react';
import Head from 'next/head';
const Footer = () => {
    return (
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
                    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
                    crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
                    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
                    crossorigin="anonymous"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <footer>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <p className="text-muted mb-0">&copy; 2022 Coder's Blog</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <a href="#" className="btn btn-social-icon btn-github mr-3"><i className="fab fa-github"></i></a>
                            <a href="#" className="btn btn-social-icon btn-linkedin mr-3"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="btn btn-social-icon btn-twitter"><i className="fab fa-twitter"></i></a>
                        </div>
                        <div className="col-md-4 text-right">
                            <a href="mailto:info@codersblog.com"><i className="far fa-envelope mr-3"></i> info@codersblog.com</a>
                            <a href="tel:+11234567890"><i className="fas fa-phone mr-3"></i> (123) 456-7890</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
