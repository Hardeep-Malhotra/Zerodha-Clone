import React from "react";

function Footer() {
    return (
        <footer className="border-top mt-5 pt-5">
            <div className="container">
                {/* Top section */}
                <div className="row">
                    <div className="col-md-3">
                        <img
                            src="media/images/logo.svg"
                            alt="Zerodha"
                            style={{ width: "60%" }}
                        />
                        <p className="text-muted mt-3">
                            © 2010 - 2025, Zerodha Broking Ltd.<br />
                            All rights reserved.
                        </p>

                        <div className="fs-4 d-flex gap-3 text-muted social-link">
                            <i className=" fa fa-brands fa-x-twitter"></i>
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            <i className=" fa fa-brands fa-instagram"></i>
                            <i className=" fa fa-brands fa-linkedin"></i>
                        </div>

                        <hr className="social-hr" />

                        <div className="fs-4 d-flex gap-3 text-muted  social-link">
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                            <i class="fa fa-whatsapp" aria-hidden="true"></i>
                            <i class="fa fa-telegram" aria-hidden="true"></i>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <h5>Account</h5>
                        <ul className="list-unstyled mt-3 ">
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Open demat account</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Minor demat account</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">NRI demat account</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Commodity</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Dematerialisation</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Fund transfer</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">MTF</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Referral program</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5>Support</h5>
                        <ul className="list-unstyled mt-3">
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Contact us</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Support portal</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">How to file a complaint?</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Status of your complaints</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Bulletin</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Circular</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Z-Connect blog</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Downloads</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5>Company</h5>
                        <ul className="list-unstyled mt-3 ">
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">About</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Philosophy</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Press & media</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Careers</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Zerodha Cares (CSR)</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Zerodha.tech</a></li>
                            <li className="mb-3"><a href="#" style={{ textDecoration: "none" }} className="text-muted footer-link">Open source</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom text */}
                <div className="mt-5 text-muted small">
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p>
                        Investments in securities market are subject to market risks; read all
                        the related documents carefully before investing.
                    </p>
                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                    <p>
                        *Customers availing insurance advisory services offered by Ditto
                        (Tactical Consulting Private Limited | IRDAI Registered Corporate
                        Agent) will not have access to exchange investor grievance redressal
                        mechanisms.
                    </p>
                </div>
                <div
                    className="mt-2 text-muted d-flex justify-content-center"
                    style={{ fontSize: "15px" }}
                >
                    <ul className="list-unstyled d-flex gap-3 footer-link">
                        <li><a href="#" className="text-muted text-decoration-none footer-link">NSE</a></li>
                        <li><a href="#" className="text-muted text-decoration-none footer-link">BSE</a></li>
                        <li><a href="#" className="text-muted text-decoration-none footer-link">MCX</a></li>
                        <li><a href="#" className="text-muted text-decoration-none footer-link">Terms & conditions</a></li>
                        <li><a href="#" className="text-muted text-decoration-none footer-link">Policies & procedures</a></li>
                        <li><a href="#" className="text-muted text-decoration-none footer-link">Privacy policy</a></li>
                        <li><a href="#" className="text-muted text-decoration-none footer-link">Disclosure</a></li>
                        <li><a href="#" className="text-muted text-decoration-none footer-link">For investor's attention</a></li>
                        <li><a href="#" className="text-muted text-decoration-none footer-link">Investor charter</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
