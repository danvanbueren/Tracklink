<?php

use JetBrains\PhpStorm\Pure;

class Sidebar
{
    private array $members = array();

    public function addMember(string $name, string $lastActiveTimestamp)
    {
        $this->members[$name] = intval($lastActiveTimestamp);
    }

    public function __toString()
    {
        return '
        <div class="sidebar-overlay" onclick="halfmoon.toggleSidebar()"></div>

        <div class="sidebar">
            <div class="sidebar-menu">
                <div class="hidden-md-and-up">
                    <div class="sidebar-content pt-0 pb-0 mb-0">
                        <kbd class="navbar-text text-monospace">' . getBuildVersion() . '</kbd>
                    </div>
                    <br/>
                </div>
                <h5 class="sidebar-title">members</h5>
                <div class="sidebar-divider"></div>
                <div class="sidebar-content mb-0 mt-0">
                    <input type="text" class="form-control disabled" placeholder="search members" disabled>
                </div>
                ' . $this->getFormattedMembers() . '
            </div>
        </div>';
    }

    private function getFormattedMembers(): string
    {
        $output = '';

        if (count($this->members) < 1) {
            $output = '
                <div class="d-flex justify-content-center">
                    <span class="pt-15 text-muted font-size-12">no other members</span>
                </div>';
        } else {

            arsort($this->members, SORT_NUMERIC);

            foreach ($this->members as $key => $val) {
                $output .= $this->getFormattedMember($key, $val, getUidFromDisplayName($key));
            }

        }

        return $output;
    }

    private function getFormattedMember($name, $lastActiveTimestamp, $uid): string
    {
        $pdt = new PrettyDateTime($lastActiveTimestamp);

        $formattedLastActive = $pdt->getPretty('member');

        $currentTime = new DateTime();
        $currentTime->setTimestamp(time());
        $storedTime = new DateTime();
        $storedTime->setTimestamp($lastActiveTimestamp);
        $deltaSeconds = $currentTime->getTimestamp() - $storedTime->getTimestamp();
        $deltaMinutes = $deltaSeconds / 60;

        if ($deltaMinutes < 2) {
            $status = '';
        } elseif ($deltaMinutes < 10) {
            $status = 'inactive';
        } else {
            $status = 'offline';
        }

        switch ($status) {
            case 'inactive':
                $outlineStyle = 'user-inactive';
                $textStyle = 'text-secondary';
                $opacity = ' style="opacity: 75%"';
                break;
            case 'offline':
                $outlineStyle = 'user-offline';
                $textStyle = 'text-danger';
                $opacity = ' style="opacity: 50%"';
                break;
            default:
                $outlineStyle = 'user-online';
                $textStyle = 'text-success';
                $opacity = '';
                break;
        }

        $userProfileImage = 'data/users/' . $uid . '/propic.jpg';

        if (file_exists($userProfileImage)) {
            $userCircle =
                '<div class="sidebar-icon rounded-circle">
                    <img src="' . $userProfileImage . '" alt="profile picture" class="rounded-circle user-circle ' . $outlineStyle . '">
                </div>';
        } else {
            $userCircle = '<span class="sidebar-icon rounded-circle font-italic user-circle ' . $outlineStyle . '">' . $name[0] . '</span>';
        }

        return '
                <a href="#" class="sidebar-link sidebar-link-with-icon pt-15">
                    ' . $userCircle . '
                    <div>
                        <p class="font-weight-bold m-0 p-0"' . $opacity . '>' . $name . '</p>
                        <div class="font-size-12 ' . $textStyle . ' m-0 p-0"' . $opacity . '>
                            <span>' . $formattedLastActive . '</span>
                        </div>
                    </div>
                </a>';
    }

}