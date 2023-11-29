<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\EducationRepository;

#[ORM\Entity(repositoryClass: EducationRepository::class)]
#[ApiResource(

    operations: [
        new Get,
        new GetCollection,
    ],
    order: [
        'startYear' => 'DESC'
    ]
)]
class Education
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $school = null;

    #[ORM\Column(length: 255)]
    private ?string $startYear = null;

    #[ORM\Column(length: 255)]
    private ?string $endYear = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $startMonth = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $endMonth = null;

    #[ORM\Column(length: 255)]
    private ?string $field = null;

    #[ORM\Column(length: 255)]
    private ?string $icon = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSchool(): ?string
    {
        return $this->school;
    }

    public function setSchool(string $school): static
    {
        $this->school = $school;

        return $this;
    }

    public function getStartYear(): ?string
    {
        return $this->startYear;
    }

    public function setStartYear(string $startYear): static
    {
        $this->startYear = $startYear;

        return $this;
    }

    public function getEndYear(): ?string
    {
        return $this->endYear;
    }

    public function setEndYear(string $endYear): static
    {
        $this->endYear = $endYear;

        return $this;
    }

    public function getStartMonth(): ?string
    {
        return $this->startMonth;
    }

    public function setStartMonth(?string $startMonth): static
    {
        $this->startMonth = $startMonth;

        return $this;
    }

    public function getEndMonth(): ?string
    {
        return $this->endMonth;
    }

    public function setEndMonth(?string $endMonth): static
    {
        $this->endMonth = $endMonth;

        return $this;
    }

    public function getField(): ?string
    {
        return $this->field;
    }

    public function setField(string $field): static
    {
        $this->field = $field;

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(string $icon): static
    {
        $this->icon = $icon;

        return $this;
    }
}
