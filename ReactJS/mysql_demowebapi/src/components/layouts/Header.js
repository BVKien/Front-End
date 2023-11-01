import React from 'react'

const Header = () => {
    return (
        <div>
            <ul>
                <hr />
                This is Header
                <hr />
            </ul>

            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <a>
                                        {/* <img src="assets/img/logo.png" alt=""> */}
                                    </a>
                                </div>

                                <nav>
                                    <ul>
                                        <li><a>Home</a>
                                            <ul>
                                                <li><a>Static Home</a></li>
                                                <li><a>Slider Home</a></li>
                                            </ul>
                                        </li>
                                        <li><a>About</a></li>
                                        <li><a>Contact</a></li>
                                    </ul>
                                </nav>
                                <a><i></i></a>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header