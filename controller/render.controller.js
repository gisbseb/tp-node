const loginRender = async (req, res) => {
  res.render("template/login", {
    title: "Connexion",
  });
};
const dashboardRender = async (req, res) => {
  res.render("template/dashboard", { title: "Dashboard", username : req.session.user.firstName });
};
const registerRender = async (req, res) => {
  res.render("template/register", {
    title: "Inscription",
    flash: { class: "success", message: "Bienvenue" },
  });
};

export default { loginRender, dashboardRender, registerRender };
