<?php

class Message
{
    public function __construct(readonly string $name,
                                readonly string $email,
                                readonly string $object,
                                readonly string $content)
    {
        if (!isset($this->name) ||
            !isset($this->email) ||
            !isset($this->object) ||
            !isset($this->content)){
            throw new Error("An error occured while creating the object");
        }
    }
}