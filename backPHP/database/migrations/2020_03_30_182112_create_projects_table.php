<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->double('last_updated_sum');
            $table->date('start_date');
            $table->boolean('deleted')->default(false);
            $table->date('end_date');
            $table->string('name');
            $table->string('short_description');
            $table->double('amount');
            $table->double('max_donation_amount');
            $table->double('min_donation_amount');
            $table->enum('status', ['CREATED', 'DELETED', 'TERMINATED', 'ACTIVE', 'PAUSED']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
