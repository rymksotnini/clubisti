<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('phone_number')->nullable();
            $table->enum('gender', ['MALE', 'FEMALE'])->nullable();
            $table->dateTime('birth_date')->nullable();
            $table->string('image_url')->nullable();
            $table->enum('status', ['CREATED', 'DELETED'])->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->integer('badge_id')->unsigned()->nullable();
            $table->integer('address_id')->unsigned()->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('cascade');
            $table->foreign('badge_id')->references('id')->on('badges')
                ->onDelete('cascade');
            $table->foreign('address_id')->references('id')->on('addresses')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
