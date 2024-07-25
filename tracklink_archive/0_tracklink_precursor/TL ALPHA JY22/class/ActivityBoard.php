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

    public function addActivity(Activity $act): void
    {
        array_push($this->activities, $act);
    }

    private function getFormattedActivity(Activity $act): string
    {
        if (empty($act->getDisplayContent())) {
            $formattedContent = '';
        } else {
            $formattedContent = '<div class="card m-0 p-10 bg-dark-light"><span>' . $act->getDisplayContent() . '</span></div>';
        }

        return '
<div class="mb-10"><div class="content m-0 p-5">
<p class="font-weight-bold m-0 p-0 d-inline-block font-size-12">' . $act->getDisplayName() . '</p>
<p class="text-muted m-0 p-0 d-inline-block font-size-12">' . $act->getDisplayActivity() . '</p>
<p class="text-muted m-0 p-0 d-inline-block float-right font-size-12">' . $act->getDisplayTime() . '</p>
</div>' . $formattedContent . '</div>';
    }

    private function getAllFormattedActivity(): string
    {
        $output = '';
        foreach ($this->activities as $a) {
            $output .= $this->getFormattedActivity($a);
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