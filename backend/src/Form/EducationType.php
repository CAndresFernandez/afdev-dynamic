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
        $currentYear = date('Y');
        $years = array_reverse(range(1975, $currentYear));

        $builder
            ->add('school', TextType::class)
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
            ->add('startMonth', ChoiceType::class, [
                'choices' => $this->getMonths(),
                'placeholder' => 'Select a month',
                'required' => false
            ])
            ->add('endMonth', ChoiceType::class, [
                'choices' => $this->getMonths(),
                'placeholder' => 'Select a month',
                'required' => false
            ])
            ->add('field', TextType::class)
            ->add('icon', ChoiceType::class, [
                'placeholder' => 'Choose an icon',
                'choices' => [
                    'School' => 'tf-documents5',
                    'Tech' => 'bi bi-laptop',
                    'Management' => 'fa-solid fa-people-roof',
                    'Kitchen' => 'fa-solid fa-kitchen-set'
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Education::class,
        ]);
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
