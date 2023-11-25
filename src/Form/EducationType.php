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
            ->add('startMonth', ChoiceType::class, [
                'choices' => $this->getMonths(),
                'placeholder' => 'Select a month',
            ])
            ->add('endMonth', ChoiceType::class, [
                'choices' => $this->getMonths(),
                'placeholder' => 'Select a month',
            ])
            ->add('field', TextType::class)
            ->add('icon', ChoiceType::class, [
                'placeholder' => 'Choose an icon',
                'choices' => [
                    'School' => 'School',
                    'Tech' => 'Tech',
                    'Management' => 'Management',
                    'Kitchen' => 'Kitchen'
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

    private function getYears() {
        $currentYear = (int) date('Y');
        $years = array_flip(range(1975, $currentYear));
        return $years;
    }

    private function getMonths() {
        $months = [
            'January' => 'January',
            'February' => 'February',
            'March' => 'March',
            'April' => 'April',
            'May' => 'May',
            'June' => 'June',
            'July' => 'July',
            'August' => 'August',
            'September' => 'September',
            'October' => 'October',
            'November' => 'November',
            'December' => 'December'
        ];
        return $months;
    }


}
