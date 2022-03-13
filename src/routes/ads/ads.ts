import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
  const session: any = req.session;
  const user = session.user;
  const data = {
    title: "Ads",
    dir: "..",
    user
  }
  res.render('ads/ads', data);
})

// router.get('/:id', async (req, res) => {
//   const data = {
//     title: "Ads/id",
//     dir: "..",
//     id: req.params.id
//   }
//   res.render('ads/ads', data);
// })

router.get('/create', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  const data = {
    title: "Create ad",
    dir: "..",
    user
  }
  res.render('ads/create-ad', data);
})

router.post('/create', async (req, res) => {

})

router.get('/update/:id', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  const data = {
    title: "Update ad",
    dir: "../..",
    id: req.params.id,
    user
  }
  res.render('ads/update', data);
})

router.post('/update/:id', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  res.send("You made a post request on update route");
})

router.get('/delete/:id', (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }
  res.send("Delete route");
})


export default router;
