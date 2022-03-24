export default class Header {
    constructor(text) {
        this.text = text;
    }

    render() {
        return `<a href="#"class="logo">${this.text}</a>
        <div class="menu-toggle"><span><img class="span_img" src="menu-outline.png" alt=""></span></div>
        <nav class="nav">
            <ul class="nav__ul">
                <li class="nav__ul-li"><a href="#" class="active nav__ul-li-a">Home</a></li>
                <li class="nav__ul-li"><a class="nav__ul-li-a" href="#">About</a></li>
                <li class="nav__ul-li"><a class="nav__ul-li-a" href="#">Services</a></li>
                <li class="nav__ul-li"><a class="nav__ul-li-a" href="#">Team</a></li>
                <li class="nav__ul-li"><a class="nav__ul-li-a" href="#">Portafolio</a></li>
                <li class="nav__ul-li"><a class="nav__ul-li-a" href="#">Contact</a></li>
            </ul>
        </nav>
        <div class="clearfix"></div>`;
    }
}