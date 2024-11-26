<?php

class Config
{
    // dev config
    private static string $configFilePath = 'config.json';
    private static string $softwareAuthor = 'Daniel Van Bueren';
    private static string $softwareVersion = 'indev2_1.0';

    // USER CONFIG - set default values...will be overwritten by config if applicable
    private string $sql_host = 'localhost';
    private string $sql_db_name = 'tracklink';
    private string $sql_username = 'root';
    private string $sql_password = 'root';

    // magic
    function __construct() {
        $this->initializeConfig();
        $this->writeConfigToFile();
    }

    // methods
    private function initializeConfig() {
        if (file_exists(self::$configFilePath)) {
            $this->assignProperties();
        } else {
            $this->writeConfigToFile();
        }
    }

    private function writeConfigToFile() {
        $fileDirectory = fopen(self::$configFilePath, "w");

        $content = json_encode(
            array(
                'sql_host'=>$this->sql_host,
                'sql_db_name'=>$this->sql_db_name,
                'sql_username'=>$this->sql_username,
                'sql_password'=>$this->sql_password
            ),
            JSON_PRETTY_PRINT);

        fwrite($fileDirectory, $content);
    }

    private function assignProperties() {
        $fileDirectory = fopen(self::$configFilePath, "r");
        $configArray = json_decode(fread($fileDirectory, filesize(self::$configFilePath)), true);

        if(is_null($configArray)) {
            $this->writeConfigToFile();
        } else {

            if (array_key_exists('sql_host', $configArray)) {
                $this->sql_host = $configArray['sql_host'];
            }
            if (array_key_exists('sql_db_name', $configArray)) {
                $this->sql_db_name = $configArray['sql_db_name'];
            }
            if (array_key_exists('sql_username', $configArray)) {
                $this->sql_username = $configArray['sql_username'];
            }
            if (array_key_exists('sql_password', $configArray)) {
                $this->sql_password = $configArray['sql_password'];
            }

        }
    }

    // getters
    public function getSqlHost(): string
    {
        return $this->sql_host;
    }
    public function getSqlDbName(): string
    {
        return $this->sql_db_name;
    }
    public function getSqlUsername(): string
    {
        return $this->sql_username;
    }
    public function getSqlPassword(): string
    {
        return $this->sql_password;
    }
    public static function getSoftwareAuthor(): string
    {
        return self::$softwareAuthor;
    }
    public static function getSoftwareVersion(): string
    {
        return self::$softwareVersion;
    }
}