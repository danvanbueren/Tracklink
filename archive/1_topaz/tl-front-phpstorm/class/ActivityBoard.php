<?php

class ActivityBoard
{
    // properties
    private string $title = 'activity board';
    private array $activities = array();

    // methods
    public function setTitle($title): void
    {
        $this->title = $title;
    }

    public function addActivity(string $name, string $activityType, string $time, string $content): void
    {
        $activity = array();

        $activity['name'] = $name;
        $activity['activityType'] = $activityType;
        $activity['time'] = $time;
        $activity['content'] = $content;

        array_push($this->activities, $activity);
    }

    private function getFormattedActivity(string $name, string $activityType, string $time, string|null $content): string
    {
        if (empty($content)) {
            $formattedContent = '';
        } else {
            $formattedContent = '<div class="card m-0 p-10 bg-dark-light"><span>' . $content . '</span></div>';
        }

        return '
<div class="mb-10"><div class="content m-0 p-5">
<p class="font-weight-bold m-0 p-0 d-inline-block font-size-12">' . $name . '</p>
<p class="text-muted m-0 p-0 d-inline-block font-size-12">' . $activityType . '</p>
<p class="text-muted m-0 p-0 d-inline-block float-right font-size-12">' . $time . '</p>
</div>' . $formattedContent . '</div>';
    }

    private function getAllFormattedActivity(): string
    {
        $output = '';

        foreach ($this->activities as $a) {
            $output .= $this->getFormattedActivity($a['name'], $a['activityType'], $a['time'], $a['content']);
        }

        return $output;
    }

    public function __toString(): string
    {
        $output = '
<div class="card pt-20">
<div class="content p-0 m-0">
<div class="card-title">
<span>';
        $output .= $this->title;

        $output .= '
</span>
</div>
</div>
<hr/>
<div class="content m-0">
<form>
<textarea class="form-control w-full" placeholder="add a note"></textarea>
<div class="mt-10">
<button class="btn btn-primary d-inline-block">post</button>
<div class="custom-switch d-inline-block float-right mt-5">
<input type="checkbox" id="switch-1" value="" disabled>
<label for="switch-1">private</label>
</div>
</div>
</form>
</div>
<hr/>
<div class="content m-0 mt-15" style="max-height: 100%;">';

        $output .= $this->getAllFormattedActivity();

        $output .= '
</div>
</div>
        ';

        return $output;
    }
}

/*


*/