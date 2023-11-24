<?php

namespace App\Controller\Back;

use App\Entity\Tech;
use App\Form\TechType;
use App\Repository\TechRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/back/tech')]
class TechController extends AbstractController
{
    #[Route('/', name: 'app_back_tech_list', methods: ['GET'])]
    public function list(TechRepository $techRepository): Response
    {
        return $this->render('back/tech/list.html.twig', [
            'techs' => $techRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_back_tech_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $tech = new Tech();
        $form = $this->createForm(TechType::class, $tech);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($tech);
            $entityManager->flush();

            return $this->redirectToRoute('app_back_tech_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('back/tech/new.html.twig', [
            'tech' => $tech,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_back_tech_show', methods: ['GET'])]
    public function show(Tech $tech): Response
    {
        return $this->render('back/tech/show.html.twig', [
            'tech' => $tech,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_back_tech_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Tech $tech, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(TechType::class, $tech);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_back_tech_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('back/tech/edit.html.twig', [
            'tech' => $tech,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_back_tech_delete', methods: ['POST'])]
    public function delete(Request $request, Tech $tech, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$tech->getId(), $request->request->get('_token'))) {
            $entityManager->remove($tech);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_back_tech_list', [], Response::HTTP_SEE_OTHER);
    }
}
