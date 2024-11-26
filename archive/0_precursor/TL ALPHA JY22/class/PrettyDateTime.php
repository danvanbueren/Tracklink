<?php

class PrettyDateTime
{
    private DateTime $dateTime;

    // constructor
    function __construct(int $timestamp)
    {
        $this->dateTime = new DateTime();
        $this->dateTime->setTimestamp($timestamp);
    }

    public function getPretty($mode): string
    {
        $currentTime = new DateTime();
        $currentTime->setTimestamp(time());

        $deltaSeconds = $currentTime->getTimestamp() - $this->dateTime->getTimestamp();
        $deltaMinutes = $deltaSeconds / 60;
        $deltaHours = $deltaMinutes / 60;
        $deltaDays = $deltaHours / 24;
        $deltaWeeks = $deltaDays / 7;
        $deltaMonths = $deltaWeeks / 4;
        $deltaYears = $deltaMonths / 12;

        switch ($mode) {
            case 'activityBoard':
                if ($deltaSeconds < 10) {
                    return 'moments ago';
                } elseif ($deltaSeconds < 60) {
                    return intval($deltaSeconds) . ' seconds ago';
                } elseif ($deltaMinutes < 60) {
                    if (intval($deltaMinutes) == 1) {
                        return intval($deltaMinutes) . ' minute ago';
                    } else {
                        return intval($deltaMinutes) . ' minutes ago';
                    }
                } elseif ($deltaHours < 24) {
                    if (intval($deltaHours) == 1) {
                        return intval($deltaHours) . ' hour ago';
                    } else {
                        return intval($deltaHours) . ' hours ago';
                    }
                } elseif ($deltaDays < 30) {
                    if (intval($deltaDays) == 1) {
                        return intval($deltaDays) . ' day ago';
                    } else {
                        return intval($deltaDays) . ' days ago';
                    }
                } elseif ($deltaWeeks < 4) {
                    if (intval($deltaWeeks) == 1) {
                        return intval($deltaWeeks) . ' week ago';
                    } else {
                        return intval($deltaWeeks) . ' weeks ago';
                    }
                } elseif ($deltaMonths < 12) {
                    if (intval($deltaMonths) == 1) {
                        return intval($deltaMonths) . ' month ago';
                    } else {
                        return intval($deltaMonths) . ' months ago';
                    }
                } elseif ($deltaYears < 20) {
                    if (intval($deltaYears) == 1) {
                        return intval($deltaYears) . ' year ago';
                    } else {
                        return intval($deltaYears) . ' years ago';
                    }
                } else {
                    return 'decades ago';
                }
            case 'member':
                if ($deltaMinutes < 2) {
                    return 'online';
                } elseif ($deltaMinutes < 10) {
                    return 'away for ' . intval($deltaMinutes) . 'm';
                } elseif ($deltaMinutes < 60) {
                    return 'last seen ' . intval($deltaMinutes) . 'm ago';
                } elseif ($deltaHours < 24) {
                    return 'last seen ' . intval($deltaHours) . 'h ago';
                } elseif ($deltaDays < 30) {
                    return 'last seen ' . intval($deltaDays) . 'd ago';
                } elseif ($deltaWeeks < 4) {
                    return 'last seen ' . intval($deltaWeeks) . 'w ago';
                } elseif ($deltaMonths < 12) {
                    return 'last seen ' . intval($deltaMonths) . 'mo ago';
                } elseif ($deltaYears < 20) {
                    return 'last seen ' . intval($deltaYears) . 'y ago';
                } else {
                    return 'last seen decades ago';
                }
            default:
                return 'invalid mode specified: "' . $mode . '" - use "activityBoard" or "member"';
        }
    }
}