<?php

namespace App\Form;

use App\Entity\Education;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EducationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('school', TextType::class)
            ->add('startYear', NumberType::class)
            ->add('endYear', NumberType::class)
            ->add('startMonth', TextType::class)
            ->add('endMonth', TextType::class)
            ->add('field', TextType::class)
            ->add('icon', ChoiceType::class, [
                'placeholder' => 'Choose an icon',
                'choices' => [
                    'School' => 1,
                    'Tech' => 2,
                    'Management' => 3,
                    'Kitchen' => 4
                ],
                'choice_attr' => [
                    'School' => ['class' => 'tf-documents5'],
                    'Tech' => ['class' => 'bi bi-laptop'],
                    'Management' => ['class' => 'fa-solid fa-people-roof'],
                    'Kitchen' => ['class' => 'fa-solid fa-kitchen-set'],
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Education::class,
        ]);
    }
}
