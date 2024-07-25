<?php

class Activity
{
    // properties

    private string $displayName;
    private string $displayActivity;
    private int $timestamp;
    private string $displayContent;


    // constructor
    function __construct(string $name, string $activity, int $timestamp, string $content)
    {
        $this->displayName = $name;
        $this->displayActivity = $activity;
        $this->timestamp = $timestamp;
        $this->displayContent = $content;
    }

    // getters and setters

    public function getDisplayContent(): string
    {
        return $this->displayContent;
    }

    public function setDisplayContent(string $displayContent): void
    {
        $this->displayContent = $displayContent;
    }

    public function getDisplayActivity(): string
    {
        return $this->displayActivity;
    }

    public function setDisplayActivity(string $displayActivity): void
    {
        $this->displayActivity = $displayActivity;
    }

    public function getDisplayName(): string
    {
        return $this->displayName;
    }

    public function setDisplayName(string $displayName): void
    {
        $this->displayName = $displayName;
    }

    public function setTime(DateTime $time): void
    {
        $this->time = $time;
    }

    public function getDisplayTime(): string
    {
        $pretty = new PrettyDateTime($this->timestamp);
        return $pretty->getPretty('activityBoard');
    }
}