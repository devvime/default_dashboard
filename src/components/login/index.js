import Raven from '../../raven/index.js'

const component = () => {
    return (
        /*html*/
        `<section class="login">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 anime" data-delay="200">
                        <div class="wrapper-login">
                            <div class="row no-gutters">
                                <div class="col-lg-8 col-image">
                                    <img src="/public/assets/images/bg-login.jpg" />
                                </div>
                                <div class="col-lg-4 col-login">
                                    <div class="box-login">
                                        <div class="content">
                                            <h1>USER<br/> LOGIN</h1>
                                            <p>Welcome to Free QRcode</p>
                                            <form>
                                                <input type="email" name="user" placeholder="Email de usuário..." required>
                                                <input type="password" name="password" placeholder="Senha..." required>
                                                <button type="button">LOGIN</button>
                                                <button type="button" id="register">REGISTER</button>
                                                <p class="forget-password">Forgot Password?</p>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="box-register">
                                        <div class="content">
                                            <h1>REGISTER</h1>
                                            <form>
                                                <input type="text" name="name" placeholder="Seu nome..." required>
                                                <input type="email" name="user" placeholder="Email de usuário..." required>
                                                <input type="password" name="password" placeholder="Senha..." required>
                                                <button type="button">REGISTER</button>
                                                <img src="/public/assets/images/back.svg" class="back-login" />
                                            </form>
                                        </div>
                                    </div>
                                    <div class="box-forget-pass">
                                        <div class="content">
                                            <h1>Forgot<br/> Password</h1>
                                            <form>
                                                <input type="email" name="user" placeholder="Email de usuário..." required>
                                                <button type="button">RESET</button>
                                                <img src="/public/assets/images/back.svg" class="back-login" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    )
}

function login() {
    Raven.render(component)

    $("#register").on("click", function() {
        $(".box-login").fadeOut()
        setTimeout(() => {
            $(".box-register").fadeIn()
            $(".box-register").css("display", "flex")
        }, 500)
    })

    $(".forget-password").on("click", function() {
        $(".box-login").fadeOut()
        setTimeout(() => {
            $(".box-forget-pass").fadeIn()
            $(".box-forget-pass").css("display", "flex")
        }, 500)
    })

    $(".back-login").on("click", function() {
        $(".box-register").fadeOut()
        $(".box-forget-pass").fadeOut()
        setTimeout(() => {
            $(".box-login").fadeIn()
            $(".box-login").css("display", "flex")
        }, 500)
    })
}

export default login