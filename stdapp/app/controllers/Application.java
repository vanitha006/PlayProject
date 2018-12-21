package controllers;
import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(views.html.first.render());
    }

    public static Result loginPage() {
        //return ok("Name: "+name);
        return ok(views.html.login.render());
        //return ok("Login Page");
    }

    public static Result signup() {
        //return ok("Name: "+name);
        return ok(views.html.signup.render());
        //return ok("Login Page");
    }

    public static Result add() {
        //return ok("Name: "+name);
        return ok(views.html.addmark.render());
        //return ok("Login Page");
    }
    public static Result welcome(String name) {
        return ok("Welcome "+name);
    }
}
