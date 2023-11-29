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
        $currentYear = date('Y');
        $years = array_reverse(range(1975, $currentYear));

        $builder
            ->add('company', TextType::class)
            ->add('startYear', ChoiceType::class, [
                'choices' => array_combine($years, $years),
                'placeholder' => 'Select a year',
                'required' => true,
            ])
            ->add('endYear', ChoiceType::class, [
                'choices' => array_combine($years, $years),
                'placeholder' => 'Select a year',
                'required' => true,
            ])
            ->add('location', TextType::class)
            ->add('jobTitle', TextType::class)
            ->add('icon', ChoiceType::class, [
                'choices' => [
                    'School' => "tf-documents5",
                    'Kitchen' => 'fa-solid fa-kitchen-set',
                    'Tech' => 'bi bi-laptop',
                    'Management' => 'fa-solid fa-people-roof'
                ],
            ])
            ->add('responsibilities', CollectionType::class, [
                'entry_type' => TextareaType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true,
            ])
        ;
        dump();
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Experience::class,
        ]);
    }
}
