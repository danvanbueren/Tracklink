<?php

class DbPipe
{

    private string $server = 'localhost';
    private string $un = 'root';
    private string $pw = 'root';
    private string $db = 'tracklink';

    public bool $healthy;
    public mysqli $conn;

    /**
     * @throws Exception
     */
    public function __construct()
    {
        $this->init();
    }

    /**
     * @throws Exception
     */
    private function init()
    {
        $this->conn = new mysqli($this->server, $this->un, $this->pw, $this->db);

        if ($this->conn->connect_error) {
            $this->healthy = false;
            say('Database connection FAILED: ' . $this->conn->connect_error);
        } else {
            $this->healthy = true;
        }


    }
}