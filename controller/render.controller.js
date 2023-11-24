const loginRender = async (req, res) => {
    res.render("template/login", { title: "Connexion" });
};
const dashboardRender = async (req, res) => {
    res.render("template/dashboard", { title: "Dashboard" });
};
const registerRender = async (req, res) => {
    res.render("template/register", { title: "Inscription" });
};

export default { loginRender, dashboardRender, registerRender };
