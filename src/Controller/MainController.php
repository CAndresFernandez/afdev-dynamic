<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('main/home.html.twig');
    }

    #[Route('/about', name: 'app_about')]
    public function about() {
        return $this->render('main/about.html.twig');
    }

    #[Route('/projects', name: 'app_projects')]
    public function projects() {
        return $this->render('main/projects.html.twig');
    }


}