<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('account_number');
            $table->integer('organisation_id')->unsigned()->nullable();
            $table->integer('account_type_id')->unsigned()->nullable();
            $table->timestamps();
            $table->foreign('organisation_id')->references('id')->on('organisations')
                ->onDelete('cascade');
            $table->foreign('account_type_id')->references('id')->on('account_types')
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
        Schema::dropIfExists('accounts');
    }
}
