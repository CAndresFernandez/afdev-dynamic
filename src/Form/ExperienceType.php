<?php

namespace App\Form;

use App\Entity\Experience;
use Symfony\Component\DomCrawler\Field\TextareaFormField;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ExperienceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('company', TextType::class)
            ->add('startYear', ChoiceType::class, [
                'choices' => $this->getYears(),
                'placeholder' => 'Select a year',
                'required' => true,
            ])
            ->add('endYear', ChoiceType::class, [
                'choices' => $this->getYears(),
                'placeholder' => 'Select a year',
                'required' => true,
            ])
            ->add('location', TextType::class)
            ->add('jobTitle', TextType::class)
            ->add('icon', ChoiceType::class, [
                'choices' => [
                    'School' => 1,
                    'Kitchen' => 2,
                    'Tech' => 3,
                    'Management' => 4
                ],
                'choice_attr' => [
                    'School' => ['class' => 'tf-documents5'],
                    'Kitchen' => ['class' => 'fa-solid fa-kitchen-set'],
                    'Tech' => ['class' => 'bi bi-laptop'],
                    'Management' => ['class' => 'fa-solid fa-people-roof']
                ]
            ])
            ->add('responsibilities', CollectionType::class, [
                'entry_type' => TextareaType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Experience::class,
        ]);
    }

    private function getYears() {
        $currentYear = (int) date('Y');
        $years = array_flip(range(1975, $currentYear));
        return $years;
    }

}
