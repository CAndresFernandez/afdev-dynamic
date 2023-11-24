<?php

namespace App\Entity;

use App\Repository\ExperienceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ExperienceRepository::class)]
class Experience
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $company = null;

    #[ORM\Column(length: 255)]
    private ?string $startYear = null;

    #[ORM\Column(length: 255)]
    private ?string $endYear = null;

    #[ORM\Column(length: 255)]
    private ?string $location = null;

    #[ORM\Column(length: 255)]
    private ?string $jobTitle = null;

    #[ORM\Column(length: 255)]
    private ?string $respA = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $respB = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $respC = null;

    #[ORM\Column(length: 255)]
    private ?string $icon = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(string $company): static
    {
        $this->company = $company;

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

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): static
    {
        $this->location = $location;

        return $this;
    }

    public function getJobTitle(): ?string
    {
        return $this->jobTitle;
    }

    public function setJobTitle(string $jobTitle): static
    {
        $this->jobTitle = $jobTitle;

        return $this;
    }

    public function getRespA(): ?string
    {
        return $this->respA;
    }

    public function setRespA(string $respA): static
    {
        $this->respA = $respA;

        return $this;
    }

    public function getRespB(): ?string
    {
        return $this->respB;
    }

    public function setRespB(?string $respB): static
    {
        $this->respB = $respB;

        return $this;
    }

    public function getRespC(): ?string
    {
        return $this->respC;
    }

    public function setRespC(?string $respC): static
    {
        $this->respC = $respC;

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