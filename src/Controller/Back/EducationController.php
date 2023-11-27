<?php

namespace App\Controller\Back;

use App\Entity\Education;
use App\Form\EducationType;
use App\Repository\EducationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/back/education')]
class EducationController extends AbstractController
{
    #[Route('/', name: 'app_back_education_list', methods: ['GET'])]
    public function list(EducationRepository $educationRepository): Response
    {
        return $this->render('/back/education/list.html.twig', [
            'educations' => $educationRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_back_education_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $education = new Education();
        $form = $this->createForm(EducationType::class, $education);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($education);
            $entityManager->flush();

            return $this->redirectToRoute('app_back_education_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('/back/education/new.html.twig', [
            'education' => $education,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_back_education_show', methods: ['GET'])]
    public function show(Education $education): Response
    {
        return $this->render('/back/education/show.html.twig', [
            'education' => $education,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_back_education_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Education $education, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(EducationType::class, $education);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_back_education_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('/back/education/edit.html.twig', [
            'education' => $education,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_back_education_delete', methods: ['POST'])]
    public function delete(Request $request, Education $education, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$education->getId(), $request->request->get('_token'))) {
            $entityManager->remove($education);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_back_education_list', [], Response::HTTP_SEE_OTHER);
    }
}
