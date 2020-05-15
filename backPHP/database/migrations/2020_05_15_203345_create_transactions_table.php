<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->double('amount');
            $table->double('newTotal');
            $table->integer('user_id')->unsigned()->nullable();
            $table->integer('account_id')->unsigned()->nullable();
            $table->integer('offer_id')->unsigned()->nullable();
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
        Schema::dropIfExists('transactions');
    }
}
