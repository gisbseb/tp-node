const getFlash = (req) => {
  if (req.session && req.session.flash) {
    let flash = req.session.flash;
    delete req.session.flash;
    return flash;
  }
};

const loginRender = async (req, res) => {
  const flash = getFlash(req);

  res.render("template/login", {
    title: "Connexion",
    flash,
  });
};

const dashboardRender = async (req, res) => {
  const flash = getFlash(req);

  res.render("template/dashboard", { title: "Dashboard", flash });
};

const registerRender = async (req, res) => {
  const flash = getFlash(req);

  res.render("template/register", {
    title: "Inscription",
    flash,
  });
};

export default { loginRender, dashboardRender, registerRender };
