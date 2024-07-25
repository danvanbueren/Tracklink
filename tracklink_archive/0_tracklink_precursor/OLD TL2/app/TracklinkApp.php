<?php


class TracklinkApp
{

    // Constructor
    public function __construct()
    {
        // Autoload all classes in directory - storing return in variable because logger cannot be created before loaded here
        $autoloadLog = $this->autoload();

        // Load all function files
        require_once 'app/functions/BuildInfo.php';
        // require_once 'app/functions/StateFunction.php';


        // Create logger
        $logger = new ConsoleLogger();

        // Print autoload log
        $logger->log($autoloadLog);

        // Create session manager
        $sessionManager = new SessionManager();
        $logger->log($sessionManager->getLog());

        // Create view
        $pageView = new PageView();

        // Set view properties
        $pageView->setTitle($sessionManager->getTitle());
        $pageView->setNavUsage($sessionManager->getNavUsage());
        $pageView->setSidebarUsage($sessionManager->getSidebarUsage());
        $pageView->setContent($sessionManager->getContent());

        // Print view
        echo $pageView;
    }

    // Autoload all classes in 'classes' dir
    private function autoload(): string
    {
        // Dev log
        $output = 'AUTOLOAD';

        // Iterate through dir
        $iter = new RecursiveIteratorIterator(new RecursiveDirectoryIterator('app\classes'));
        foreach ($iter as $file) {
            // Breakpoint to check if isDir
            if ($file->isDir()) continue;

            // Add to output for dev log
            $output .= '___' . $file->getFilename();

            // Require class files to be instantiated later
            require_once $file->getPathname();
        }

        // Return dev log
        return $output;
    }
}

